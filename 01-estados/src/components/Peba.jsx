import React, { useState } from 'react'

export default function Peba() {


    const[resultado,setResultado]= useState()

function calcularPontos(){


    let vitorias = Number(prompt("vitorias:"))
    let empates = Number(prompt("empates:"))
    let Pontos = vitorias*3 + empates


    setResultado(Pontos);
}

  return (
    <div className='cont-peba'>
        <h2>pé pequeno</h2>
        <button onClick={calcularPontos}>Calcular os ponto</button>
        <p></p>
        Pontos: {resultado}

    </div>
  )
}