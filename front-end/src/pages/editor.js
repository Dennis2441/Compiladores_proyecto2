import React from "react";
import { useEffect, useState } from "react";
import { Header } from "../components/header";


export function Editor() {
    const [code, setCode] = useState("");
    const [consola, setConsola] = useState("");


    const changeHandler = (evt) => {
        setCode(evt.target.value);
    }

    async function submitHandler(){
        const reqOps = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({entrada:code})
        };
        const response = await fetch('http://localhost:5000/analizar', reqOps);
        const data = await response.json().then( data => setConsola(data.consola));
    }

    return (
        <div>
            <Header></Header>
            <div className="container mt-3 mb-3">
                <button className="btn btn-success mb-2" onClick={submitHandler}>
                    Ejecutar Código
                </button>
                <textarea className="form-control mt-3 bg-dark text-light" style={{minHeight:"300px"}} placeholder="//Ingresa tu código" onChange={changeHandler} value={code}></textarea>
                <textarea className="form-control mt-3 bg-dark text-secondary" style={{backgroundColor:"black", minHeight:"150px"}} placeholder="Consola" value={consola}></textarea>
            </div>
        </div>
    );
}