/**
 * @class Nodo para almacenar errores ya sean lexicos, sintacticos o semanticos
 */
export class Exception{
    type: String;
    description: String;
    line: Number;
    column: Number;

    constructor(type: String, description: String, line: Number, column: Number) {
        this.type = type;
        this.description = description;
        this.line = line;
        this.column = column;
    }

    toString(){
        return `ERROR: ${this.type}.\t${this.description}. Row:${this.line} Col:${this.column} \n`;
    }
}