import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { Node } from "../Abstract/Node";
import { Table } from "../Simbols/Table";
import { Tree } from "../Simbols/Tree";
import { Exception } from "../utils/Exception";
import { types, Type } from "../utils/Type";

/**
 * @class Genera un nuevo nodo expresion para realizar operaciones relacionales
 */
export class Relational extends Node {
    leftOperator: Node;
    rightOperator: Node;
    Operator: String;

    constructor(leftOperator: Node, rightOperator: Node, Operator: String, line: Number, column: Number) {
        super(new Type(types.BOOLEAN), line, column);
        this.leftOperator = leftOperator;
        this.rightOperator = rightOperator;
        this.Operator = Operator;
    }

    execute(table: Table, tree: Tree) {
        
        const LeftResult = this.leftOperator.execute(table, tree);
        if (LeftResult instanceof Exception) {
            return LeftResult;
        }
        const RightResult = this.rightOperator.execute(table, tree);
        if (RightResult instanceof Exception) {
            return RightResult;
        }

        //------------------------------------------------------------------------------------------------------------------------
        //                                                 MENOR QUE
        //------------------------------------------------------------------------------------------------------------------------
        if (this.Operator === '<') {
            //CHAR < CHAR
            if (this.leftOperator.type.type === types.CHAR && this.rightOperator.type.type === types.CHAR) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult.charCodeAt(0) < RightResult.charCodeAt(0);
            //INT < CHAR || CHAR < INT 
            }else if ((this.leftOperator.type.type === types.INT || this.leftOperator.type.type === types.CHAR) &&
                      (this.rightOperator.type.type === types.INT || this.rightOperator.type.type === types.CHAR)) {
                this.type = new Type(types.BOOLEAN);
                if(typeof LeftResult === 'string'){
                    return LeftResult.charCodeAt(0) < Number(RightResult);
                }else{
                    return Number(LeftResult) < RightResult.charCodeAt(0);
                }
            //DOUBLE < CHAR || CHAR < DOUBLE 
            }else if ((this.leftOperator.type.type === types.DOUBLE || this.leftOperator.type.type === types.CHAR) &&
                       (this.rightOperator.type.type === types.DOUBLE || this.rightOperator.type.type === types.CHAR)) {
                this.type = new Type(types.BOOLEAN);
                if(typeof LeftResult === 'string'){
                    return LeftResult.charCodeAt(0) < Number(RightResult);
                }else{
                    return Number(LeftResult) < RightResult.charCodeAt(0);
                }
            //INT < DOUBLE || DOUBLE < INT
            }else if ((this.leftOperator.type.type == types.INT || this.leftOperator.type.type == types.DOUBLE) &&
                      (this.rightOperator.type.type == types.INT || this.rightOperator.type.type == types.DOUBLE)) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult < RightResult;
            } else {
                const error = new Exception('Semantico',
                    `Error de tipos en MENOR QUE se esta tratando de operar ${this.leftOperator.type.type} y ${this.rightOperator.type.type}`,
                    this.line, this.column);
                tree.excepciones.push(error);
                tree.console.push(error.toString());
                return error;
            }
        //------------------------------------------------------------------------------------------------------------------------
        //                                                 MAYOR QUE
        //------------------------------------------------------------------------------------------------------------------------
        } else if (this.Operator === '>') {
            //CHAR > CHAR
            if (this.leftOperator.type.type === types.CHAR && this.rightOperator.type.type === types.CHAR) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult.charCodeAt(0) > RightResult.charCodeAt(0);
            //INT > CHAR || CHAR > INT 
            }else if ((this.leftOperator.type.type === types.INT || this.leftOperator.type.type === types.CHAR) &&
                      (this.rightOperator.type.type === types.INT || this.rightOperator.type.type === types.CHAR)) {
                this.type = new Type(types.BOOLEAN);
                if(typeof LeftResult === 'string'){
                    return LeftResult.charCodeAt(0) > Number(RightResult);
                }else{
                    return Number(LeftResult) > RightResult.charCodeAt(0);
                }
            //DOUBLE > CHAR || CHAR > DOUBLE 
            }else if ((this.leftOperator.type.type === types.DOUBLE || this.leftOperator.type.type === types.CHAR) &&
                       (this.rightOperator.type.type === types.DOUBLE || this.rightOperator.type.type === types.CHAR)) {
                this.type = new Type(types.BOOLEAN);
                if(typeof LeftResult === 'string'){
                    return LeftResult.charCodeAt(0) > Number(RightResult);
                }else{
                    return Number(LeftResult) > RightResult.charCodeAt(0);
                }
            //INT > DOUBLE || DOUBLE > INT
            }else if ((this.leftOperator.type.type == types.INT || this.leftOperator.type.type == types.DOUBLE) &&
                      (this.rightOperator.type.type == types.INT || this.rightOperator.type.type == types.DOUBLE)) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult > RightResult;
            } else {
                const error = new Exception('Semantico',
                    `Error de tipos en MAYOR QUE se esta tratando de operar ${this.leftOperator.type.type} y ${this.rightOperator.type.type}`,
                    this.line, this.column);
                tree.excepciones.push(error);
                tree.console.push(error.toString());
                return error;
            }
        //------------------------------------------------------------------------------------------------------------------------
        //                                                 MAYOR O IGUAL QUE
        //------------------------------------------------------------------------------------------------------------------------
        } else if (this.Operator === '>=') {
            //CHAR >= CHAR
            if (this.leftOperator.type.type === types.CHAR && this.rightOperator.type.type === types.CHAR) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult.charCodeAt(0) >= RightResult.charCodeAt(0);
            //INT >= CHAR || CHAR >= INT 
            }else if ((this.leftOperator.type.type === types.INT || this.leftOperator.type.type === types.CHAR) &&
                      (this.rightOperator.type.type === types.INT || this.rightOperator.type.type === types.CHAR)) {
                this.type = new Type(types.BOOLEAN);
                if(typeof LeftResult === 'string'){
                    return LeftResult.charCodeAt(0) >= Number(RightResult);
                }else{
                    return Number(LeftResult) >= RightResult.charCodeAt(0);
                }
            //DOUBLE >= CHAR || CHAR >= DOUBLE 
            }else if ((this.leftOperator.type.type === types.DOUBLE || this.leftOperator.type.type === types.CHAR) &&
                       (this.rightOperator.type.type === types.DOUBLE || this.rightOperator.type.type === types.CHAR)) {
                this.type = new Type(types.BOOLEAN);
                if(typeof LeftResult === 'string'){
                    return LeftResult.charCodeAt(0) >= Number(RightResult);
                }else{
                    return Number(LeftResult) >= RightResult.charCodeAt(0);
                }
            //INT >= DOUBLE || DOUBLE >= INT
            }else if ((this.leftOperator.type.type == types.INT || this.leftOperator.type.type == types.DOUBLE) &&
                      (this.rightOperator.type.type == types.INT || this.rightOperator.type.type == types.DOUBLE)) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult >= RightResult;
            } else {
                const error = new Exception('Semantico',
                    `Error de tipos en MAYOR O IGUAL QUE se esta tratando de operar ${this.leftOperator.type.type} y ${this.rightOperator.type.type}`,
                    this.line, this.column);
                tree.excepciones.push(error);
                tree.console.push(error.toString());
                return error;
            }
        //------------------------------------------------------------------------------------------------------------------------
        //                                                 MENOR O IGUAL QUE
        //------------------------------------------------------------------------------------------------------------------------
        } else if (this.Operator === '<=') {
            //CHAR <= CHAR
            if (this.leftOperator.type.type === types.CHAR && this.rightOperator.type.type === types.CHAR) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult.charCodeAt(0) <= RightResult.charCodeAt(0);
            //INT <= CHAR || CHAR <= INT 
            }else if ((this.leftOperator.type.type === types.INT || this.leftOperator.type.type === types.CHAR) &&
                      (this.rightOperator.type.type === types.INT || this.rightOperator.type.type === types.CHAR)) {
                this.type = new Type(types.BOOLEAN);
                if(typeof LeftResult === 'string'){
                    return LeftResult.charCodeAt(0) <= Number(RightResult);
                }else{
                    return Number(LeftResult) <= RightResult.charCodeAt(0);
                }
            //DOUBLE <= CHAR || CHAR <= DOUBLE 
            }else if ((this.leftOperator.type.type === types.DOUBLE || this.leftOperator.type.type === types.CHAR) &&
                       (this.rightOperator.type.type === types.DOUBLE || this.rightOperator.type.type === types.CHAR)) {
                this.type = new Type(types.BOOLEAN);
                if(typeof LeftResult === 'string'){
                    return LeftResult.charCodeAt(0) <= Number(RightResult);
                }else{
                    return Number(LeftResult) <= RightResult.charCodeAt(0);
                }
            //INT <= DOUBLE || DOUBLE <= INT
            }else if ((this.leftOperator.type.type == types.INT || this.leftOperator.type.type == types.DOUBLE) &&
                      (this.rightOperator.type.type == types.INT || this.rightOperator.type.type == types.DOUBLE)) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult <= RightResult;
            } else {
                const error = new Exception('Semantico',
                    `Error de tipos en MENOR O IGUAL QUE se esta tratando de operar ${this.leftOperator.type.type} y ${this.rightOperator.type.type}`,
                    this.line, this.column);
                tree.excepciones.push(error);
                tree.console.push(error.toString());
                return error;
            }
        //------------------------------------------------------------------------------------------------------------------------
        //                                                 DIFERENTE
        //------------------------------------------------------------------------------------------------------------------------
        } else if (this.Operator === '!=') {
            //INT != DOUBLE || DOUBLE != INT
            if ((this.leftOperator.type.type == types.INT || this.leftOperator.type.type == types.DOUBLE) &&
                (this.rightOperator.type.type == types.INT || this.rightOperator.type.type == types.DOUBLE)) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult != RightResult;
            
            //BOOL != BOOL
            }if (this.leftOperator.type.type === types.BOOLEAN && this.rightOperator.type.type === types.BOOLEAN) {
                    this.type = new Type(types.BOOLEAN);
                    return LeftResult != RightResult;
            
            //CHAR != STRING || STRING != CHAR
            } else if ((this.leftOperator.type.type === types.CHAR || this.leftOperator.type.type === types.STRING) &&
                       (this.rightOperator.type.type === types.CHAR || this.rightOperator.type.type === types.STRING)) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult != RightResult;
            } else {
                const error = new Exception('Semantico',
                    `Error de tipos en DIFERENTE QUE se esta tratando de operar ${this.leftOperator.type.type} y ${this.rightOperator.type.type}`,
                    this.line, this.column);
                tree.excepciones.push(error);
                tree.console.push(error.toString());
                return error;
            }
        //------------------------------------------------------------------------------------------------------------------------
        //                                                 IGUAL
        //------------------------------------------------------------------------------------------------------------------------
        } else if (this.Operator === '==') {
            //INT != DOUBLE || DOUBLE != INT
            if ((this.leftOperator.type.type == types.INT || this.leftOperator.type.type == types.DOUBLE) &&
                (this.rightOperator.type.type == types.INT || this.rightOperator.type.type == types.DOUBLE)) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult == RightResult;
            
            //BOOL != BOOL
            }if (this.leftOperator.type.type === types.BOOLEAN && this.rightOperator.type.type === types.BOOLEAN) {
                    this.type = new Type(types.BOOLEAN);
                    return LeftResult == RightResult;
            
            //CHAR != STRING || STRING != CHAR
            } else if ((this.leftOperator.type.type === types.CHAR || this.leftOperator.type.type === types.STRING) &&
                       (this.rightOperator.type.type === types.CHAR || this.rightOperator.type.type === types.STRING)) {
                this.type = new Type(types.BOOLEAN);
                return LeftResult == RightResult;
            } else {
                const error = new Exception('Semantico',
                    `Error de tipos en DIFERENTE QUE se esta tratando de operar ${this.leftOperator.type.type} y ${this.rightOperator.type.type}`,
                    this.line, this.column);
                tree.excepciones.push(error);
                tree.console.push(error.toString());
                return error;
            }
        } else {
            const error = new Exception('Semantico',
                `Error, Operador desconocido`,
                this.line, this.column);
            tree.excepciones.push(error);
            tree.console.push(error.toString());
            return error;
        }
    }
}