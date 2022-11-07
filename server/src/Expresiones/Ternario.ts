import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";


export class Ternario extends Node {
    condition: Node;
    trueExpr : Node;
    falseExpr : Node;
    

    constructor(condition: Node, trueExpr: Node, falseExpr: Node, line: Number, column: Number) {
        super(null, line, column);
        this.condition = condition;
        this.trueExpr = trueExpr;
        this.falseExpr = falseExpr;
    }

    execute(table: Table, tree: Tree) {

        const Condition =  this.condition.execute(table, tree);
        if (Condition instanceof Exception) {
            return Condition;
        }
        const trueVal = this.trueExpr.execute(table, tree);
        if (trueVal instanceof Exception) {
            return trueVal;
        }
        const falseVal = this.falseExpr.execute(table, tree);
        if (falseVal instanceof Exception) {
            return falseVal;
        }

        if (this.condition.type.type !== types.BOOLEAN) {
            const error = new Exception('Semantico',
                `Se esperaba una expresion booleana para la condicion`,
                this.line, this.column);
            tree.excepciones.push(error);
            tree.console.push(error.toString());
            return error;
        }else{
            this.type = this.trueExpr.type;
            if(Condition){
                return trueVal;
            }else{
                return falseVal;
            }
        }
    }
}