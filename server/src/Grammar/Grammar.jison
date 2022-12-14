%{
    const {Primitive} = require('../Expresiones/Primitive');
    const {Arithmetic} = require('../Expresiones/Arithmetic');
    const {Relational} = require('../Expresiones/Relational');
    const {Continue} = require('../Expresiones/Continue');
    const {Break} = require('../Expresiones/Break');
    const {Logic} = require('../Expresiones/Logic');
    const {Ternario} = require('../Expresiones/Ternario');
    const {Casteo} = require('../Expresiones/Casteo');
    const {Identificador} = require('../Expresiones/Identificador');
    const {Print} = require('../Instrucciones/Print');
    const {If} = require('../Instrucciones/If');
    const {While} = require('../Instrucciones/While');
    const {DoWhile} = require('../Instrucciones/DoWhile');
    const {Declaracion} = require('../Instrucciones/Declaracion');
    const {Asignacion} = require('../Instrucciones/Asignacion');
    const {Excepcion} = require('../utils/Exception');
    const {Type, types} = require('../utils/Type');
    const {Tree} = require('../Simbols/Tree');
%}
%lex
%options case-insensitive
decimal [0-9]+"."[0-9]+
entero [0-9]+
stringliteral (\"[^"]*\")
identifier ([a-zA-Z_])[a-zA-Z0-9_]*
char \'(\\.|.)\'
%%

\s+                   /* skip whitespace */
{decimal}             return 'DOUBLE_LITERAL'
{entero}              return 'INT_LITERAL'
{stringliteral}       return 'STRING_LITERAL'
{char}                return 'CHAR_LITERAL'
"*"                   return '*'
"/"                   return '/'
";"                   return ';'
"-"                   return '-'
"+"                   return '+'
"*"                   return '*'
"^"                   return '^'
"%"                   return '%'

"<="                  return '<='
">="                  return '>='
"<"                   return '<'
">"                   return '>'
"=="                  return '=='
"!="                  return '!='
"||"                  return '||'
"&&"                  return '&&'
"!"                   return '!'
"="                   return '='

'?'                   return '?'
':'                   return ':'
"("                   return '('
")"                   return ')'  
"["                   return '['
"]"                   return ']'
"{"                   return '{'
"}"                   return '}'
//TIPOS DE DATOS
"int"                 return 'int'
"double"              return 'double'
"string"              return 'string'
"boolean"             return 'boolean'
"char"                return 'char'
//PALABRAS RESERVADAS
"true"                return 'true'
"false"               return 'false'
"println"             return 'println'
"print"               return 'print'
"if"                  return 'if'
"else"                return 'else'
"elif"                return 'elif'
"break"               return 'break'
"continue"            return 'continue'
"while"               return 'while'
"do"                  return 'do'
{identifier}          return 'identifier'
<<EOF>>	          return 'EOF'

/lex

%left 'else'
%left '||'
%left '&&'
%left '==', '!='
%left '>=', '<=', '<', '>'
%left '+' '-'
%left '*' '/' '%'
%left '^'
%right '!'
%left UMENOS

%start INICIO

%%

INICIO : INSTRUCCIONES EOF {$$ = new Tree($1); return $$;}
;

INSTRUCCIONES : INSTRUCCIONES INSTRUCCION { $$ = $1; $$.push($2); }
              | INSTRUCCION               { $$ = [$1]; }
              ;

INSTRUCCION : PRINT {$$ = $1;}
            | IF {$$ = $1;}
            | WHILE {$$ = $1;}
            | DOWHILE {$$ = $1;}
            | DECLARACION {$$ = $1;}
            | ASIGNACION {$$ = $1;}
            | 'continue' ';' {$$ = new Continue(@1.first_line, @1.first_column)}
            | 'break' ';' {$$ = new Break(@1.first_line, @1.first_column)}
            ;


DECLARACION : TIPO identifier '=' TERNARIO ';' {$$ = new Declaracion($1, $2, $4, @2.first_line, @2.first_column);}
            | TIPO identifier '=' EXPRESION ';' {$$ = new Declaracion($1, $2, $4, @2.first_line, @2.first_column);}
            | TIPO identifier '=' CASTEO ';' {$$ = new Declaracion($1, $2, $4, @2.first_line, @2.first_column);}
            | TIPO identifier ';' {$$ = new Declaracion($1, $2, null, @2.first_line, @2.first_column);}
            ;

ASIGNACION : identifier '=' TERNARIO ';' {$$ = new Asignacion($1, $3, @2.first_line, @2.first_column);}
           | identifier '=' CASTEO ';' {$$ = new Asignacion($1, $3, @2.first_line, @2.first_column);}
           | identifier '=' EXPRESION ';' {$$ = new Asignacion($1, $3, @1.first_line, @1.first_column);} 
           ;

TERNARIO : EXPRESION '?' EXPRESION ':' EXPRESION { $$ = new Ternario($1, $3, $5, @1.first_line, @1.first_column);}
         ;
CASTEO : '(' TIPO ')' EXPRESION { $$ = new Casteo($2, $4, @1.first_line, @1.first_column); }
       ;

TIPO : 'int' {$$ = new Type(types.INT);}
     | 'string' {$$ = new Type(types.STRING);}
     | 'boolean' {$$ = new Type(types.BOOLEAN);}
     | 'double' {$$ = new Type(types.DOUBLE);}
     | 'char' {$$ = new Type(types.CHAR);}
     ;

PRINT : 'print' '(' EXPRESION ')' ';' { $$ = new Print($3, @1.first_line, @1.first_column);}
      | 'println' '(' EXPRESION ')' ';' { $$ = new Print($3, @1.first_line, @1.first_column, true);}
      ;

IF : 'if' CONDICION BLOQUE_INSTRUCCIONES {$$ = new If($2, $3, [], @1.first_line, @1.first_column);}
   | 'if' CONDICION BLOQUE_INSTRUCCIONES 'else' BLOQUE_INSTRUCCIONES {$$ = new If($2, $3, $5, @1.first_line, @1.first_column);}
   | 'if' CONDICION BLOQUE_INSTRUCCIONES 'else' IF {$$ = new If($2, $3, [$5], @1.first_line, @1.first_column);}
   ;


WHILE : 'while' CONDICION BLOQUE_INSTRUCCIONES {$$ = new While($2, $3, @1.first_line, @1.first_column);}
      ;

DOWHILE : 'do' BLOQUE_INSTRUCCIONES 'while' CONDICION  ';' { $$ = new DoWhile($4, $2, @1.first_line, @1.first_column); }
        ;

BLOQUE_INSTRUCCIONES : '{' INSTRUCCIONES '}' {$$ = $2;}
                     | '{' '}' {$$ = [];}
                     ;


CONDICION : '(' EXPRESION ')' {$$ = $2;}
          ;
      
EXPRESION : '-' EXPRESION %prec UMENOS	    { $$ = new Arithmetic($2, null, '-', @1.first_line, @1.first_column); }
          | '!' EXPRESION	                { $$ = new Arithmetic($2, null, '!', @1.first_line, @1.first_column); }
          | EXPRESION '^' EXPRESION		    { $$ = new Arithmetic($1, $3, '^', @2.first_line, @2.first_column); }
          | EXPRESION '%' EXPRESION		    { $$ = new Arithmetic($1, $3, '%', @2.first_line, @2.first_column); }
          | EXPRESION '+' EXPRESION		    { $$ = new Arithmetic($1, $3, '+', @2.first_line, @2.first_column); }
          | EXPRESION '-' EXPRESION		    { $$ = new Arithmetic($1, $3, '-', @2.first_line, @2.first_column); }
          | EXPRESION '*' EXPRESION		    { $$ = new Arithmetic($1, $3, '*', @2.first_line, @2.first_column); }
          | EXPRESION '/' EXPRESION	          { $$ = new Arithmetic($1, $3, '/', @2.first_line, @2.first_column); }
          | EXPRESION '<' EXPRESION		    { $$ = new Relational($1, $3, '<', @2.first_line, @2.first_column); }
          | EXPRESION '>' EXPRESION		    { $$ = new Relational($1, $3, '>', @2.first_line, @2.first_column); }
          | EXPRESION '>=' EXPRESION	    { $$ = new Relational($1, $3, '>=', @2.first_line, @2.first_column); }
          | EXPRESION '<=' EXPRESION	    { $$ = new Relational($1, $3, '<=', @2.first_line, @2.first_column); }
          | EXPRESION '==' EXPRESION	    { $$ = new Relational($1, $3, '==', @2.first_line, @2.first_column); }
          | EXPRESION '!=' EXPRESION	    { $$ = new Relational($1, $3, '!=', @2.first_line, @2.first_column); }
          | EXPRESION '||' EXPRESION	    { $$ = new Logic($1, $3, '&&', @2.first_line, @2.first_column); }
          | EXPRESION '&&' EXPRESION	    { $$ = new Logic($1, $3, '||', @2.first_line, @2.first_column); }
          | 'INT_LITERAL'			    { $$ = new Primitive(new Type(types.INT), Number($1), @1.first_line, @1.first_column); }
          | 'DOUBLE_LITERAL'			    { $$ = new Primitive(new Type(types.DOUBLE), Number($1), @1.first_line, @1.first_column); }
          | 'STRING_LITERAL'			    { $$ = new Primitive(new Type(types.STRING), $1.slice(1, -1), @1.first_line, @1.first_column); }
          | 'CHAR_LITERAL'			    { $$ = new Primitive(new Type(types.CHAR), $1.replace(/\'/g,""), @1.first_line, @1.first_column); }
          | 'true'				    { $$ = new Primitive(new Type(types.BOOLEAN), true, @1.first_line, @1.first_column); }
          | 'false'				    { $$ = new Primitive(new Type(types.BOOLEAN), false, @1.first_line, @1.first_column); }
          | identifier			          { $$ = new Identificador($1, @1.first_line, @1.first_column); }
          | '(' EXPRESION ')'		          { $$ = $2; }
          ;
