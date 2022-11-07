import {Simbol} from "../Simbols/Simbol";

export class Table{
    Previous: Table;
    Variables: Map<String, Simbol>;
    ambito: string;
    constructor(Previous: Table){
        this.Previous = Previous;
        this.Variables = new Map<String, Simbol>();
        this.ambito = "GLOBAL";
    }

    setVariable(simbol: Simbol){
        let env: Table;
        for(env = this; env != null; env = env.Previous){
            for(let key of Array.from( env.Variables.keys()) ) {
                if(key === simbol.identifier){
                    return `La variable ${key} ya ha sido declarada.`;
                }
            }
        }
        this.Variables.set(simbol.identifier, simbol);
        return null;
    }

    getVariable(identifier: String): Simbol{
        let env: Table;
        for(env = this; env != null; env = env.Previous){
            for(let key of Array.from( env.Variables.keys()) ) {
                if(key.toLowerCase() === identifier.toLowerCase()){
                    return env.Variables.get(key);
                }
            }
        }
        return null;
    }

    getTableArray(){
        let arr : Array<any>;
        arr = [];
        let env: Table;
        for(env = this; env != null; env = env.Previous){
            env.Variables.forEach((obj, key) => {
                let temp = {
                    id: obj.identifier,
                    type: obj.type.type,
                    value: obj.value,
                    ambit: env.ambito
                }; 
                arr.push(temp);
            });
        }
        return arr;
    }

}