import React from "react";
import '../styles/Tarea.css'

export function Tarea({ texto }){
    <div className="tarea-contenedor">
        <div className="tarea-texto">
            {texto}
        </div>
        <div className="tarea-icono">
            Elimninar 
        </div>
    </div>
}