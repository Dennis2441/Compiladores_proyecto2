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

    async function upload(e){
        e.preventDefault();
        const reader = new FileReader();
        console.log(e.target.files[0]);
        reader.onload = async (e) => { 
          const text = (e.target.result)
          setCode(text);
        };
        reader.readAsText(e.target.files[0])
    }

    async function download(){
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('code').value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "Archivo";
        document.body.appendChild(element);
        element.click();
    }

    return (
        <div>
            <Header></Header>
            <div className="container mt-3 mb-3">
                <span className="btn btn-dark btn-file me-2">
                    Subir Archivo <input type="file" onChange={upload}/>
                </span>
                <button className="btn btn-dark mx-2" onClick={download}>
                    Guardar Archivo
                </button>
                <button className="btn btn-dark mx-2" onClick={() => setCode("")}>
                    Nuevo Archivo
                </button>
                <button className="btn btn-success mx-2" onClick={submitHandler}>
                    Ejecutar Código
                </button>
                <textarea id="code" className="form-control mt-3 bg-dark text-light" style={{minHeight:"300px"}} placeholder="//Ingresa tu código" onChange={changeHandler} value={code}></textarea>
                <textarea className="form-control mt-3 bg-dark text-secondary" style={{backgroundColor:"black", minHeight:"150px"}} placeholder="Consola" value={consola}></textarea>
            </div>
        </div>
    );
}