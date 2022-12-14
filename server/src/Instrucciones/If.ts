import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";

export class If extends Node {
    condition: Node;
    IfList: Array<Node>;
    ElseList: Array<Node>;

    constructor(condition: Node, IfList: Array<Node>, ElseList: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.condition = condition;
        this.IfList = IfList;
        this.ElseList = ElseList;
    }

    execute(table: Table, tree: Tree) {
        const newtable = new Table(table);
        newtable.ambito = "IF";
        let result: Node;
        result = this.condition.execute(newtable, tree);
        if (result instanceof Exception) {
            return result;
        }

        if (this.condition.type.type !== types.BOOLEAN) {
            const error = new Exception('Semantico',
                `Se esperaba una expresion booleana para la condicion`,
                this.line, this.column);
            tree.excepciones.push(error);
            tree.console.push(error.toString());
            return error;
        }

        if (result) {
            for (let i = 0; i < this.IfList.length; i++) {
                const res = this.IfList[i].execute(newtable, tree);
                if(res instanceof Continue || res instanceof Break){
                    return res;
                }
            }
        } else {
            for (let i = 0; i < this.ElseList.length; i++) {
                const res = this.ElseList[i].execute(newtable, tree);
                if(res instanceof Continue || res instanceof Break){
                    return res;
                }
            }
        }

        return null;
    }
}