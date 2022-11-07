import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/home";
import { Editor } from "./pages/editor";
import { Reports } from "./pages/reports";

export function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/editor' element={ <Editor/> } />
                    <Route path='/reportes' element={ <Reports/> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}