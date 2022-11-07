import React from "react";
import { useEffect, useState } from 'react';
import { Header } from "../components/header";

export function Reports(){

    const [tabIndex, setTabIndex] = useState(1);
    const [errors, setErrors] = useState([]);
    const [syms, setSyms] = useState([]);


    useEffect(() => {
        const reqOps = {
            method: 'GET',            
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://localhost:5000/errores`, reqOps)
        .then(res => res.json())
        .then(data => {
            setErrors(data)
        });
        fetch(`http://localhost:5000/simbolos`, reqOps)
        .then(res => res.json())
        .then(data => {
            setSyms(data)
        });
    }, []);

    console.log(syms);

    return(
        <div className="container">
            <Header></Header>
            <div className="container mt-3 mb-3">
                <hr className="text-light"/>
                <div className="text-light">
                    <button className={tabIndex===1?"btn btn-dark me-3":"btn me-3 text-light"} 
                        onClick={()=>setTabIndex(1)}>Reporte de Errores</button>
                    <button className={tabIndex===2?"btn btn-dark":"btn text-light"} 
                        onClick={()=>setTabIndex(2)}>Tabla de Símbolos</button>
                </div>
                <hr className="text-light"></hr>
            </div>

            <div className="container text-light">
                {
                    tabIndex === 1 && 
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Tipo</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Fila</th>
                                <th scope="col">Columna</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                errors.map((obj, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{obj.type}</th>
                                            <td>{obj.description}</td>
                                            <td>{obj.line}</td>
                                            <td>{obj.column}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }
                {
                    tabIndex === 2 && 
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Ámbitp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                syms.map((obj, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{obj.id}</th>
                                            <td>{obj.type}</td>
                                            <td>{obj.value}</td>
                                            <td>{obj.ambit}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }

            </div>

        </div>
    );
}