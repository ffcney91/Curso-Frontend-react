import React from 'react'

export default PePequeno

const[resultado,setResultado]= useState()

function PePequeno() {
   
    let preço = Number(prompt("preço:"))
    let quantidade = Number(prompt("quantidade:"))

    let valetroca = preço*quantidade

    setResultado(CalcularCalçados);
  return (
    <div className='cont-PePequeno'>
        <PePequeno />
        <hr />
        <h1>Pé Pequeno e as trocas</h1>
        <button onClick={CalcularCalçados}>calcular os calçados</button>
        <p></p>
        CalcularCalçados{resultado}
    </div>
  )
}
