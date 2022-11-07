import { Node } from "../Abstract/Node"
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";


export class Casteo extends Node {
    expression : Node;

    constructor(type: Type, expression: Node, line: Number, column: Number) {
        super(type, line, column);
        this.expression =  expression;
    }

    execute(table: Table, tree: Tree) {

        const value =  this.expression.execute(table, tree);
        if (value instanceof Exception) {
            return value;
        }
        try {
            if(this.type.type == types.INT){
                if(this.expression.type.type === types.INT){
                    return value;
                }else if(this.expression.type.type === types.DOUBLE){
                    return Math.trunc(value);
                }else if(this.expression.type.type === types.CHAR){
                    return value.charCodeAt(0);
                }else if(this.expression.type.type === types.BOOLEAN){
                    return Number(value);
                }else if(this.expression.type.type === types.STRING){
                    return Math.trunc(Number(value));
                }
            }else if(this.type.type == types.DOUBLE){
                if(this.expression.type.type === types.INT){
                    return parseFloat(value).toFixed(2);
                }else if(this.expression.type.type === types.DOUBLE){
                    return value;
                }else if(this.expression.type.type === types.CHAR){
                    return parseFloat(value.charCodeAt(0)).toFixed(2);
                }else if(this.expression.type.type === types.BOOLEAN){
                    return Number(value);
                }else if(this.expression.type.type === types.STRING){
                    return parseFloat(value).toFixed(2);
                }
            }else if(this.type.type == types.BOOLEAN){
                if(this.expression.type.type === types.INT){
                    if(value > 0){
                        return true
                    }else{
                        return false;
                    }
                }else if(this.expression.type.type === types.DOUBLE){
                    if(value > 0){
                        return true
                    }else{
                        return false;
                    }
                    return value;
                }else if(this.expression.type.type === types.CHAR){
                    if(value == "1"){
                        return true
                    }else if(value == "0"){
                        return false;
                    }                   
                }else if(this.expression.type.type === types.BOOLEAN){
                    return value;
                }else if(this.expression.type.type === types.STRING){
                    if(value == "1" || value == "true"){
                        return true;
                    }else if(value == "1" || value == "flase"){
                        return false
                    }
                }
                const excep = new Exception('Semantico',
                `No se puede convertir el valor de tipo ${this.expression.type.type} a ${this.type.type}`,
                this.line, this.column);
                tree.excepciones.push(excep);
                tree.console.push(excep.toString());
                return excep;
            }else if(this.type.type == types.CHAR){
                if(this.expression.type.type === types.INT){
                    return String(value).charAt(0);
                }else if(this.expression.type.type === types.DOUBLE){
                    return String(value).charAt(0);;
                }else if(this.expression.type.type === types.CHAR){
                    return value;
                }else if(this.expression.type.type === types.BOOLEAN){
                    if(value == '0'){
                        return false;
                    }else if(value == '1'){
                        return true;
                    }
                }else if(this.expression.type.type === types.STRING){
                    return String(value).charAt(0);;
                }
            }else if(this.type.type == types.STRING){
                return String(value);
            }
        } catch (error) {
            const excep = new Exception('Semantico',
            `No se puede convertir el valor de tipo ${this.expression.type.type} a ${this.type.type}`,
            this.line, this.column);
            tree.excepciones.push(excep);
            tree.console.push(excep.toString());
            return excep;
        }        
    }
}