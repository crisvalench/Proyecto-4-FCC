import React, {useState} from "react";
import '../styles/Tarea-Formulario.css';
import { v4 as uuidv4 } from 'uuid';

export default function Formulario( props ){

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput (e.target.value);
// estrae valor
  }

  const manejarEnvio = e =>{
    e.preventDefault();
    console.log('Enviando form')
    const tareaNueva ={
      id:uuidv4(),
      texto:input,
      completada: false

    }
    props.onSubmit(tareaNueva);
  }
  return(
    <form className="tarea-formulario"
    onSubmit={manejarEnvio}>

      <input className="tarea-input"
      type='text'
      placeholder="Escriba su tarea nueva"
      name="texto"
      onChange={manejarCambio}/>

      <button className="tarea-boton">
        Agregar tarea
      </button>
    </form>
    )
}