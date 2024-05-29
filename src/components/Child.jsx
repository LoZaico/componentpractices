import React from 'react'

export const Child = ({ name, setName, addMessage }) => {

    const sendMessage = () => {
        addMessage("Este es el mensaje del hijo");
    }

    const changeName = () => {
        setName("Nuevo nombre!!");
    }

  return (
    <div> 
        {name}
        <div>
        <button onClick={ sendMessage } >Enviar Mensaje</button>   
        <button onClick={ changeName } >Cambiar el nombre</button>   
        </div>
     </div>
  )
}
