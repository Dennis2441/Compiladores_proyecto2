export enum types {
    INT = "INT",
    DOUBLE = "DOUBLE",
    CHAR = "CHAR",
    STRING = "STRING",
    BOOLEAN = "BOOLEAN",
    VOID = "VOID"
}

export class Type{
    type : types;

    constructor(type: types){
        this.type = type;
    }

    toString(){
        if(this.type === types.BOOLEAN){
            return 'boolean';
        }else if(this.type === types.INT){
            return 'int';
        }else if(this.type === types.DOUBLE){
            return 'double';
        }else if(this.type === types.CHAR){
            return 'char';
        }else if(this.type === types.STRING){
            return 'string';
        }
    }
}