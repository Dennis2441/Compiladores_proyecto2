//Definiendo analisis lexico
%lex

%options case-insensitive

%%
\s+                   /* skip whitespace */
(\/\*(.|\n)*\*\/)     /* ignore comment  */ 
(\/\/[^\n]*)          /* ignore comment  */
"Print" return 'Tok_print'
"Println" return 'Tok_println'
[0-9]+                return 'Tok_entero'
[0-9]+("."[0-9]+)?    return 'Tok_decimal'
(\"(\\\"|[^"]|\n)*\") return 'Tok_cadena'
\'(\\.|.)\'           return 'Tok_char'
/*ARITMÉTICOS*/
"continue"            return 'Tok_continue'
"<="                  return 'Tok_menori'
">="                  return 'Tok_mayori'
"=="                  return 'Tok_igual'
"!="                  return 'Tok_diferente'
"*"                   return 'Tok_por'
"/"                   return 'Tok_div'
"-"                   return 'Tok_menos'
"+"                   return 'Tok_mas'
"^"                   return 'Tok_ele'
"%"                   return 'Tok_porcen'
"="                   return 'Tok_asigna1'
/*RELACIONALES*/
"<"                   return 'Tok_menor'
">"                   return 'Tok_mayor'
/*LÓGICOS*/
"||"                  return 'Tok_or'
"&&"                  return 'Tok_and'
"!"                   return 'Tok_not'
/*AGRUPACIÓN*/
"["                 return 'Tok_cor1'
"]"                 return 'Tok_cor2'
"("                 return 'Tok_par1'
")"                 return 'Tok_par2'
"{"                 return 'Tok_llav1'
"}"                 return 'Tok_llav2'
/*PUNTUACIÓN*/

":"                   return 'Tok_puntos'
","                   return 'Tok_coma'
";"                   return 'Tok_pyc'
/*RESERVED WORDS*/
"class"               return 'class'
"import"              return 'import'
"main"                return 'main'
"true"                return 'Tok_true'
"false"               return 'Tok_false'
"break"               return  'Tok_break'
"toLower"             return 'Tok_toLower'
"toUpper"             return 'Tok_toUpper'
"round"               return 'Tok_round'
"if"                  return 'Tok_if'
"typeof"              return  'Tok_typeof'
"toString"            return  'Tok_toString'
"toCharArray"         return  'Tok_toCharArray'
"push"                return 'Tok_push'
"pop"                 return  'Tok_pop'
"run"                 return   'Tok_run'
"length"              return 'Tok_length'
"elif"                return 'Tok_elif'
"else"                return 'Tok_else'
"switch"              return 'Tok_switch'
"case"                return 'Tok_case'
"break"               return 'Tok_break'            
"default"             return 'Tok_default'
"while"               return 'Tok_while'
"return"              return  'Tok_return'
"until"               return 'Tok_until'
"do"                  return 'Tok_do'
"for"                 return 'Tok_for'
"int"                 return 'Tok_tipo'
"double"              return 'Tok_tipo'
"String"              return 'Tok_tipo'
"boolean"             return 'Tok_tipo'
"char"                return 'Tok_tipo'
"void"                return 'Tok_tipo'
[a-zA-Z_]([a-zA-Z0-9_])* return 'Tok_ID'

<<EOF>>               return 'EOF';
.					{ console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                                          L_Error.getInstance().insertar(new N_Error("Lexico","Caracter: \" "+yytext+"\" no es valido" ,yylloc.first_line,yylloc.first_column));
                                          return null; }

//definir codigo javascript

%{
    function AST_Node(tag,value,fila,columna){
        this.tag=tag;
        this.value=value;
        this.fila=fila;
        this.columna=columna;
        //Vamos a definir que tenga hijos
        this.childs=[]
        this.addChilds=addChilds;
        this.getSon=getSon;
        function addChilds(){
            for(var i =0; i< arguments.length;i++){
                this.childs.push(arguments[i]);
                if(arguments[i]!==null){
                    arguments[i].padre=this;
                }
            }
        }
        function getSon(pos){
            if(pos >this.hijos.length - 1)return null;
            return this.hijos[pos];
        }
    }
%}

%right 'Tok_asigna1'
%left  'Tok_or'
%left  'Tok_and'
%left  'Tok_igual'  'Tok_diferente'
%nonassoc  'Tok_mayor' 'Tok_menor' 'Tok_menori' 'Tok_mayori'
%left  'Tok_mas' 'Tok_menos'
%left  'Tok_por' 'Tok_div' 'Tok_mod'

%right 'Tok_not' UMINUS

%start INICIO
//iniciando gramtica
//produccion inicial

%%
INICIO:SETENCIAS EOF {$$=new AST_Node("RAIZ","RAIZ",this.$first_line,@1.last_column);$$.addChilds($1);return $$} ;

SENTENCIAS: SETENCIAS SETENCIA {$1.addChilds($2);$$=$1;}
            | SETENCIA{$$= new AST_Node("SENTENCIAS","SENTENCIAS",this._$.first_line,@1.last_column);
                      $$.addChilds($1);} ;
            

SETENCIA: DECLARACION_1 Tok_pyc{$$=$1}
        |ASIGNACION Tok_pyc{$$=$1}
        |BLOQUE{$$=$1}
        |IF{$$=$1}
        |WHILE{$$=$1}
        |DO_WHILE Tok_pyc{$$=$1}
        |DO_UNTIL Tok_pyc{$$=$1}
        |PRINT{$$=$1}
        |FOR{$$=$1};

DECLARACION_1:Tok_tipo ID_LIST  {$$= new AST_Node("DECLARACION","DECLARACION",this._$.first_line,@1.first_column); $$.addChilds($1)};

ASIGNACION: Tok_ID Tok_asigna1 EXP {$$=new AST_Node("ASIGNACION","ASIGNACION",this._$.first_line,@1.last_column); 
                                            $$.addChilds(new AST_Node("id",$1,this._$.first_line,@1.last_column),$3);}; 

ID_LIST: ID_LIST Tok_coma Tok_ID {$1.addChilds(new AST_Node("ID",$3,this._$.first_line,@3.first_column)); $$=$1;}
        |Tok_ID Tok_asigna1 EXP {$$=new AST_Node("ID_LIST","ID_LIST",this._$.first_line,@1.last_column); 
                                            $$.addChilds(new AST_Node("id",$1,this._$.first_line,@1.last_column),$3);}; 
        | Tok_ID {$$= new AST_Node("ID_LIST","ID_LIST"); $$.addChilds(new AST_Node("ID",$1,this._$.first_line,@1.first_column))};

IF: Tok_if Tok_par1 EXP Tok_par2 BLOQUE    {$$= new AST_Node("IF","IF",this._$.first_line,@1.last_column);$$.addChilds($3,$5)}
    |Tok_elif Tok_par1 EXP Tok_par2 BLOQUE    {$$= new AST_Node("IF","IF",this._$.first_line,@1.last_column);$$.addChilds($3,$5)}
    |Tok_else BLOQUE {$$= new AST_Node("IF","IF",this._$.first_line,@1.last_column);$$.addChilds($3,$5)}

BLOQUE: Tok_llav1 SENTENCIAS Tok_llav2{$$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,@1.last_column); $$.addChilds($2)}
        |Tok_llav1 Tok_llav2{$$= new AST_Node("BLOQUE","BLOQUE",this._$.first_line,@1.last_column);};

WHILE: Tok_while Tok_par1 EXP Tok_par2 BLOQUE{$$=new AST_Node("WHILE","WHILE",this._$.first_line,@1.last_column); $$.addChilds($3,$5)};

DO_WHILE: Tok_do BLOQUE Tok_while Tok_par1 EXP Tok_par2 {$$=new AST_Node("DO_WHILE","DO_WHILE",this._$.first_line,@1.last_column);$$.addChilds($2,$5)};

DO_UNTIL: Tok_do BLOQUE Tok_until Tok_par1 EXP Tok_par2 {$$=new AST_Node("DO_UNTIL","DO_UNTIL",this._$.first_line,@1.last_column);$$.addChilds($2,$5)};

//FOR: Tok_for Tok_par1 BLOQUE 

PRINT: Tok_print Tok_par1 EXP Tok_par2 Tok_pyc {$$= new AST_Node("PRINT","PRINT",this._$.first_line,@1.last_column); $$.addChilds($3);};
        |Tok_print Tok_par1 EXP Tok_par2 Tok_pyc {$$= new AST_Node("PRINT","PRINT",this._$.first_line,@1.last_column); $$.addChilds($3);};

EXP: EXP Tok_mas EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_menos EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_por EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_div EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_pot EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_mod EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_diferente EXP              {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_igual EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_igualr EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_mayor EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_menor EXP                  {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_mayori EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_menori EXP                 {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_and EXP                    {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |EXP Tok_or EXP                     {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds($1,new AST_Node("op",$2,this._$.first_line,@2.last_column),$3);}
    |Tok_not EXP                        {$$= new AST_Node("EXP","EXP",this._$.first_line,@2.last_column);$$.addChilds(new AST_Node("op",$1,this._$.first_line,@1.last_column),$2);}
    |Tok_par1 EXP Tok_par2              {$$=$2}
    |Tok_cadena                        {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);
                                         var text = $1.substr(0,$1.length);
                                    $$.addChilds(new AST_Node("string",text,this._$.first_line,@1.last_column));}
    |Tok_decimal                        {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("decimal",$1,this._$.first_line,@1.last_column));}
    |Tok_numero                         {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("numero",$1,this._$.first_line,@1.last_column));}
    |Tok_true                           {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("true",$1,this._$.first_line,@1.last_column));}
    |Tok_false                          {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("false",$1,this._$.first_line,@1.last_column));}
    |Tok_ID                             {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);$$.addChilds(new AST_Node("id",$1,this._$.first_line,@1.last_column));};
    |Tok_char                        {$$= new AST_Node("EXP","EXP",this._$.first_line,@1.last_column);
                                         var text = $1.substr(0,$1.length);
                                    $$.addChilds(new AST_Node("char",text,this._$.first_line,@1.last_column));}