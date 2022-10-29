import React from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useEffect, useState } from "react";
import { Header } from "../components/header";


export function Editor() {
    const [code, setCode] = useState(`Println("Hola mundo :-)")`);


    return (
        <div>
            <Header editor={true} ></Header>
            <div className="container mt-3">
                <CodeEditor
                    value={code}
                    language="js"
                    placeholder="Ingresa Código MFM Script"
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 15,
                        backgroundColor: "rgb(33,37,41)",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                        height:"60vh"
                    }}
                ></CodeEditor>
                <textarea className="form-control mt-3" placeholder="Consola"></textarea>
            </div>
        </div>
    );
}