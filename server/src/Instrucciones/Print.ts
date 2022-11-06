import {Node} from "../Abstract/Node";
import {Table} from "../Simbols/Table";
import {Tree} from "../Simbols/Tree";
import {Type} from "../utils/Type";
import {types} from "../utils/Type";

export class Print extends Node{
    expression : Node;
    ln: Boolean;
    
    constructor(expression: Node, line: Number, column: Number, ln:Boolean){
        super(new Type(types.VOID), line, column);
        this.expression = expression;
        this.ln = ln;
    }

    execute(table: Table, tree: Tree): any {
        const value = this.expression.execute(table, tree);
        if(this.ln){
            tree.console.push(String(value) + "\n");
        }else{
            tree.console.push(value);
        }
        return null;
    }
}