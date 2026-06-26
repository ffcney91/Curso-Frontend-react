import { useState } from 'react'
import './App.css'
import Peba from './components/Peba'
import RenderCondicional from './components/RenderCondicional'

function App() {
  const [rendimento,setRenimento]= useState(12000)
  let salario = 10002

function incrementarSalario(){
  salario += 10
  console.log("Novo Salario: R$"+salario)
 
//rendimento = 111111 <<<< nunca fazer isso 
 // setRenimento(20000)
  setRenimento(rendimento+25)

  console.log(rendimento);
}

  return (
    <div className='cont-app'>
      <h1> Estados e outras coisas</h1>
    <RenderCondicional />
    <hr />
        <Peba />
        <hr />

       salario:${salario.toFixed(2).replace('.',',')}
       <p>
        rendimento: R${rendimento}
       </p>
       <button onClick={incrementarSalario}>➕</button>
    </div>
  )
}

export default App
