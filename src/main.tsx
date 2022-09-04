import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Camera from './camera';
import Contact from "./contact";

export default function Main(){
   
    return(
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<App/>}>
        <Route path="contact" element={<Contact/>}/>
        <Route path='camera' element={<Camera/>}/>
         </Route>
        </Routes>
        </BrowserRouter>
    );
}