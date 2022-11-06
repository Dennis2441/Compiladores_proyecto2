import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";
import { Simbol } from "../Simbols/Simbol";

export class Declaracion extends Node {
    type: Type;
    identifier: String;
    value: Node;

    constructor(type: Type, identifier: String, value: Node, line: Number, column: Number) {
        super(type, line, column);
        this.identifier = identifier;
        this.value = value;
    }

    execute(table: Table, tree: Tree) {
    
        const result = this.value !== null? this.value.execute(table, tree) : null;
        if (result instanceof Exception) {
            return result;
        }
        if(this.value !== null){
            if (this.type.type != this.value.type.type) {
                const error = new Exception('Semantico',
                    `No se puede declarar la variable porque los tipos no coinciden.`,
                    this.line, this.column);
                tree.excepciones.push(error);
                tree.console.push(error.toString());
                return error;
            }
        }

        let simbol: Simbol;
        simbol = new Simbol(this.type, this.identifier, result);
        const res = table.setVariable(simbol);
        if (res != null) {
            const error = new Exception('Semantico',
                res,
                this.line, this.column);
            tree.excepciones.push(error);
            tree.console.push(error.toString());
        }
        return null;
    }
}