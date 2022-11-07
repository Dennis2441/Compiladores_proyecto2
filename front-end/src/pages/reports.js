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

    console.log(errors);
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

            <div className="container">
                {
                    tabIndex === 1 && 
                    <table>
                        <thead className="table">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                }

            </div>

        </div>
    );
}