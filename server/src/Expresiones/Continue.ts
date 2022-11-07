import { Node } from "../Abstract/Node";
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";

export class Continue extends Node {
    constructor(line: Number, column: Number) {
        super(null, line, column);
    }

    execute(table: Table, tree: Tree){
        return this;
    }
}