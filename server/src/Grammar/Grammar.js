/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Grammar = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,10],$V1=[1,11],$V2=[1,18],$V3=[1,19],$V4=[1,20],$V5=[1,21],$V6=[1,22],$V7=[1,23],$V8=[1,12],$V9=[1,13],$Va=[1,14],$Vb=[1,15],$Vc=[1,16],$Vd=[5,13,15,17,26,27,28,29,30,31,32,33,37,38,40],$Ve=[1,31],$Vf=[1,34],$Vg=[17,25],$Vh=[1,46],$Vi=[1,47],$Vj=[1,38],$Vk=[1,39],$Vl=[1,40],$Vm=[1,41],$Vn=[1,42],$Vo=[1,43],$Vp=[1,44],$Vq=[1,45],$Vr=[1,63],$Vs=[1,60],$Vt=[1,61],$Vu=[1,62],$Vv=[1,64],$Vw=[1,65],$Vx=[1,66],$Vy=[1,67],$Vz=[1,68],$VA=[1,69],$VB=[1,70],$VC=[1,71],$VD=[1,72],$VE=[1,73],$VF=[14,22,23,25,41,43,44,45,46,47,48,49,50,51,52,53,54,55],$VG=[5,13,15,17,26,27,28,29,30,31,32,33,36,37,38,40],$VH=[1,88],$VI=[14,22,23,25,41,44,45,46,47,48,49,50,51,52,53,54,55],$VJ=[14,22,23,25,41,45,48,49,50,51,52,53,54,55],$VK=[14,22,23,25,48,49,50,51,52,53,54,55],$VL=[14,22,23,25,52,53,54,55];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"PRINT":7,"IF":8,"WHILE":9,"DOWHILE":10,"DECLARACION":11,"ASIGNACION":12,"continue":13,";":14,"break":15,"TIPO":16,"identifier":17,"=":18,"TERNARIO":19,"EXPRESION":20,"CASTEO":21,"?":22,":":23,"(":24,")":25,"int":26,"string":27,"boolean":28,"double":29,"char":30,"print":31,"println":32,"if":33,"CONDICION":34,"BLOQUE_INSTRUCCIONES":35,"else":36,"while":37,"do":38,"{":39,"}":40,"-":41,"!":42,"^":43,"%":44,"+":45,"*":46,"/":47,"<":48,">":49,">=":50,"<=":51,"==":52,"!=":53,"||":54,"&&":55,"INT_LITERAL":56,"DOUBLE_LITERAL":57,"STRING_LITERAL":58,"CHAR_LITERAL":59,"true":60,"false":61,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",13:"continue",14:";",15:"break",17:"identifier",18:"=",22:"?",23:":",24:"(",25:")",26:"int",27:"string",28:"boolean",29:"double",30:"char",31:"print",32:"println",33:"if",36:"else",37:"while",38:"do",39:"{",40:"}",41:"-",42:"!",43:"^",44:"%",45:"+",46:"*",47:"/",48:"<",49:">",50:">=",51:"<=",52:"==",53:"!=",54:"||",55:"&&",56:"INT_LITERAL",57:"DOUBLE_LITERAL",58:"STRING_LITERAL",59:"CHAR_LITERAL",60:"true",61:"false"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,2],[6,2],[11,5],[11,5],[11,5],[11,3],[12,4],[12,4],[19,5],[21,4],[16,1],[16,1],[16,1],[16,1],[16,1],[7,5],[7,5],[8,3],[8,5],[8,5],[9,3],[10,5],[35,3],[35,2],[34,3],[20,2],[20,2],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$ = new Tree($$[$0-1]); return this.$;
break;
case 2:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 3:
 this.$ = [$$[$0]]; 
break;
case 4: case 5: case 6: case 7: case 8: case 9:
this.$ = $$[$0];
break;
case 10:
this.$ = new Continue(_$[$0-1].first_line, _$[$0-1].first_column)
break;
case 11:
this.$ = new Break(_$[$0-1].first_line, _$[$0-1].first_column)
break;
case 12: case 13: case 14:
this.$ = new Declaracion($$[$0-4], $$[$0-3], $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);
break;
case 15:
this.$ = new Declaracion($$[$0-2], $$[$0-1], null, _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 16:
this.$ = new Asignacion($$[$0-3], $$[$0-1], _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 17:
this.$ = new Asignacion($$[$0-3], $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);
break;
case 18:
 this.$ = new Ternario($$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
break;
case 19:
 this.$ = new Casteo($$[$0-2], $$[$0], _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 20:
this.$ = new Type(types.INT);
break;
case 21:
this.$ = new Type(types.STRING);
break;
case 22:
this.$ = new Type(types.BOOLEAN);
break;
case 23:
this.$ = new Type(types.DOUBLE);
break;
case 24:
this.$ = new Type(types.CHAR);
break;
case 25:
 this.$ = new Print($$[$0-2], _$[$0-4].first_line, _$[$0-4].first_column);
break;
case 26:
 this.$ = new Print($$[$0-2], _$[$0-4].first_line, _$[$0-4].first_column, true);
break;
case 27:
this.$ = new If($$[$0-1], $$[$0], [], _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 28:
this.$ = new If($$[$0-3], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
break;
case 29:
this.$ = new If($$[$0-3], $$[$0-2], [$$[$0]], _$[$0-4].first_line, _$[$0-4].first_column);
break;
case 30:
this.$ = new While($$[$0-1], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 31:
 this.$ = new DoWhile($$[$0-1], $$[$0-3], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 32: case 34:
this.$ = $$[$0-1];
break;
case 33:
this.$ = [];
break;
case 35:
 this.$ = new Arithmetic($$[$0], null, '-', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 36:
 this.$ = new Arithmetic($$[$0], null, '!', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 37:
 this.$ = new Arithmetic($$[$0-2], $$[$0], '^', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 38:
 this.$ = new Arithmetic($$[$0-2], $$[$0], '%', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 39:
 this.$ = new Arithmetic($$[$0-2], $$[$0], '+', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 40:
 this.$ = new Arithmetic($$[$0-2], $$[$0], '-', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 41:
 this.$ = new Arithmetic($$[$0-2], $$[$0], '*', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 42:
 this.$ = new Arithmetic($$[$0-2], $$[$0], '/', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 43:
 this.$ = new Relational($$[$0-2], $$[$0], '<', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 44:
 this.$ = new Relational($$[$0-2], $$[$0], '>', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 45:
 this.$ = new Relational($$[$0-2], $$[$0], '>=', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 46:
 this.$ = new Relational($$[$0-2], $$[$0], '<=', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 47:
 this.$ = new Relational($$[$0-2], $$[$0], '==', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 48:
 this.$ = new Relational($$[$0-2], $$[$0], '!=', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 49:
 this.$ = new Logic($$[$0-2], $$[$0], '&&', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 50:
 this.$ = new Logic($$[$0-2], $$[$0], '||', _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 51:
 this.$ = new Primitive(new Type(types.INT), Number($$[$0]), _$[$0].first_line, _$[$0].first_column); 
break;
case 52:
 this.$ = new Primitive(new Type(types.DOUBLE), Number($$[$0]), _$[$0].first_line, _$[$0].first_column); 
break;
case 53:
 this.$ = new Primitive(new Type(types.STRING), $$[$0].slice(1, -1), _$[$0].first_line, _$[$0].first_column); 
break;
case 54:
 this.$ = new Primitive(new Type(types.CHAR), $$[$0].replace(/\'/g,""), _$[$0].first_line, _$[$0].first_column); 
break;
case 55:
 this.$ = new Primitive(new Type(types.BOOLEAN), true, _$[$0].first_line, _$[$0].first_column); 
break;
case 56:
 this.$ = new Primitive(new Type(types.BOOLEAN), false, _$[$0].first_line, _$[$0].first_column); 
break;
case 57:
 this.$ = new Identificador($$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 58:
 this.$ = $$[$0-1]; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:$V0,15:$V1,16:17,17:$V2,26:$V3,27:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,33:$Va,37:$Vb,38:$Vc},{1:[3]},{5:[1,24],6:25,7:4,8:5,9:6,10:7,11:8,12:9,13:$V0,15:$V1,16:17,17:$V2,26:$V3,27:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,33:$Va,37:$Vb,38:$Vc},o($Vd,[2,3]),o($Vd,[2,4]),o($Vd,[2,5]),o($Vd,[2,6]),o($Vd,[2,7]),o($Vd,[2,8]),o($Vd,[2,9]),{14:[1,26]},{14:[1,27]},{24:[1,28]},{24:[1,29]},{24:$Ve,34:30},{24:$Ve,34:32},{35:33,39:$Vf},{17:[1,35]},{18:[1,36]},o($Vg,[2,20]),o($Vg,[2,21]),o($Vg,[2,22]),o($Vg,[2,23]),o($Vg,[2,24]),{1:[2,1]},o($Vd,[2,2]),o($Vd,[2,10]),o($Vd,[2,11]),{17:$Vh,20:37,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:48,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{35:49,39:$Vf},{17:$Vh,20:50,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{35:51,39:$Vf},{37:[1,52]},{4:53,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:$V0,15:$V1,16:17,17:$V2,26:$V3,27:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,33:$Va,37:$Vb,38:$Vc,40:[1,54]},{14:[1,56],18:[1,55]},{17:$Vh,19:57,20:58,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{25:[1,59],41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC,54:$VD,55:$VE},{17:$Vh,20:74,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:75,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},o($VF,[2,51]),o($VF,[2,52]),o($VF,[2,53]),o($VF,[2,54]),o($VF,[2,55]),o($VF,[2,56]),o($VF,[2,57]),{17:$Vh,20:76,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{25:[1,77],41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC,54:$VD,55:$VE},o($Vd,[2,27],{36:[1,78]}),{25:[1,79],41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC,54:$VD,55:$VE},o($Vd,[2,30]),{24:$Ve,34:80},{6:25,7:4,8:5,9:6,10:7,11:8,12:9,13:$V0,15:$V1,16:17,17:$V2,26:$V3,27:$V4,28:$V5,29:$V6,30:$V7,31:$V8,32:$V9,33:$Va,37:$Vb,38:$Vc,40:[1,81]},o($VG,[2,33]),{17:$Vh,19:82,20:83,21:84,24:[1,85],41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},o($Vd,[2,15]),{14:[1,86]},{14:[1,87],22:$VH,41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC,54:$VD,55:$VE},{14:[1,89]},{17:$Vh,20:90,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:91,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:92,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:93,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:94,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:95,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:96,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:97,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:98,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:99,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:100,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:101,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:102,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:103,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},o($VF,[2,35]),o($VF,[2,36]),{25:[1,104],41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC,54:$VD,55:$VE},{14:[1,105]},{8:107,33:$Va,35:106,39:$Vf},o([14,39],[2,34]),{14:[1,108]},o($VG,[2,32]),{14:[1,109]},{14:[1,110],22:$VH,41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC,54:$VD,55:$VE},{14:[1,111]},{16:112,17:$Vh,20:76,24:$Vi,26:$V3,27:$V4,28:$V5,29:$V6,30:$V7,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},o($Vd,[2,16]),o($Vd,[2,17]),{17:$Vh,20:113,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},o($Vd,[2,25]),o($VF,[2,37]),o($VI,[2,38],{43:$Vs}),o($VJ,[2,39],{43:$Vs,44:$Vt,46:$Vv,47:$Vw}),o($VJ,[2,40],{43:$Vs,44:$Vt,46:$Vv,47:$Vw}),o($VI,[2,41],{43:$Vs}),o($VI,[2,42],{43:$Vs}),o($VK,[2,43],{41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw}),o($VK,[2,44],{41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw}),o($VK,[2,45],{41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw}),o($VK,[2,46],{41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw}),o($VL,[2,47],{41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA}),o($VL,[2,48],{41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA}),o([14,22,23,25,54],[2,49],{41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC,55:$VE}),o([14,22,23,25,54,55],[2,50],{41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC}),o($VF,[2,58]),o($Vd,[2,26]),o($Vd,[2,28]),o($Vd,[2,29]),o($Vd,[2,31]),o($Vd,[2,12]),o($Vd,[2,13]),o($Vd,[2,14]),{25:[1,114]},{23:[1,115],41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC,54:$VD,55:$VE},{17:$Vh,20:116,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{17:$Vh,20:117,24:$Vi,41:$Vj,42:$Vk,56:$Vl,57:$Vm,58:$Vn,59:$Vo,60:$Vp,61:$Vq},{14:[2,19],41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC,54:$VD,55:$VE},{14:[2,18],41:$Vr,43:$Vs,44:$Vt,45:$Vu,46:$Vv,47:$Vw,48:$Vx,49:$Vy,50:$Vz,51:$VA,52:$VB,53:$VC,54:$VD,55:$VE}],
defaultActions: {24:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

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
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 57
break;
case 2:return 56
break;
case 3:return 58
break;
case 4:return 59
break;
case 5:return 46
break;
case 6:return 47
break;
case 7:return 14
break;
case 8:return 41
break;
case 9:return 45
break;
case 10:return 46
break;
case 11:return 43
break;
case 12:return 44
break;
case 13:return 51
break;
case 14:return 50
break;
case 15:return 48
break;
case 16:return 49
break;
case 17:return 52
break;
case 18:return 53
break;
case 19:return 54
break;
case 20:return 55
break;
case 21:return 42
break;
case 22:return 18
break;
case 23:return 22
break;
case 24:return 23
break;
case 25:return 24
break;
case 26:return 25  
break;
case 27:return '['
break;
case 28:return ']'
break;
case 29:return 39
break;
case 30:return 40
break;
case 31:return 26
break;
case 32:return 29
break;
case 33:return 27
break;
case 34:return 28
break;
case 35:return 30
break;
case 36:return 60
break;
case 37:return 61
break;
case 38:return 32
break;
case 39:return 31
break;
case 40:return 33
break;
case 41:return 36
break;
case 42:return 15
break;
case 43:return 13
break;
case 44:return 37
break;
case 45:return 38
break;
case 46:return 17
break;
case 47:return 5
break;
}
},
rules: [/^(?:\s+)/i,/^(?:([0-9]+\.[0-9]+))/i,/^(?:([0-9]+))/i,/^(?:(("[^"]*")))/i,/^(?:('(\\.|.)'))/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:;)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:\*)/i,/^(?:\^)/i,/^(?:%)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:=)/i,/^(?:\?)/i,/^(?::)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\{)/i,/^(?:\})/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:string\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:println\b)/i,/^(?:print\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:break\b)/i,/^(?:continue\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:(([a-zA-Z_])[a-zA-Z0-9_]*))/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Grammar;
exports.Parser = Grammar.Parser;
exports.parse = function () { return Grammar.parse.apply(Grammar, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}