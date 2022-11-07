import {Node} from "../Abstract/Node";
import {Exception} from "../utils/Exception";

export class Tree {
    instructions: Array<Node>
    excepciones: Array<Exception>
    console: Array<String>

    constructor(instructions: Array<Node>) {
        this.instructions = instructions;
        this.excepciones = new Array<Exception>();
        this.console = new Array<String>();
    }
}