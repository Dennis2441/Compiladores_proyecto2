import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types } from "../utils/Type";
import { Continue } from "../Expresiones/Continue";
import { Break } from "../Expresiones/Break";


export class DoWhile extends Node {
    condition: Node;
    List: Array<Node>;

    constructor(condition: Node, List: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.condition = condition;
        this.List = List;
    }

    execute(table: Table, tree: Tree) {
        let result: Node;

        const newtable = new Table(table);
        newtable.ambito = "WHILE";
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
            for (let i = 0; i < this.List.length; i++) {
                const res = this.List[i].execute(newtable, tree);
                if (res instanceof Continue) {
                    break;
                } else if (res instanceof Break) {
                    return;
                }
            }
        }

        do {
            const newtable = new Table(table);
            newtable.ambito = "WHILE";
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
                for (let i = 0; i < this.List.length; i++) {
                    const res = this.List[i].execute(newtable, tree);
                    if (res instanceof Continue) {
                        break;
                    } else if (res instanceof Break) {
                        return;
                    }
                }
            }
        } while (result);
        return null;
    }
}