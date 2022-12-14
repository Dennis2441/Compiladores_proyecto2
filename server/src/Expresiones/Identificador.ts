import { Node } from "../Abstract/Node";
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Simbol } from "../Simbols/Simbol";
import { Exception } from "../utils/Exception";

export class Identificador extends Node {
    identifier: String;

    constructor(identifier: String, line: Number, column: Number) {
        // tipo null porque aun no se el tipo
        super(null, line, column);
        this.identifier = identifier;
    }

    execute(table: Table, tree: Tree) {
        let variable: Simbol;
        variable = table.getVariable(this.identifier);
        if (variable == null) {
            const error = new Exception('Semantico',
                'No se ha encontrado la variable ' + this.identifier,
                this.line, this.column);
            tree.excepciones.push(error);
            tree.console.push(error.toString());
            return error;
        }
        this.type = variable.type;
        return variable.value;
    }
}