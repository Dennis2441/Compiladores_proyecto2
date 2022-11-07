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
                if(key === identifier){
                    return env.Variables.get(key);
                }
            }
        }
        return null;
    }

    getTableArray(){
        let temp : Array<any>;
        temp = [];
        let env: Table;
        for(env = this; env != null; env = env.Previous){
            temp.concat(Array.from(env.Variables.keys()), this.ambito);
        }
        return temp;
    }

}