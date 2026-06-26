import React, { useState } from 'react'
function RenderCondicional() {
  const [dado, setdado] = useState()
  //const demo = useState('eu sou o demo')


  function sortearnumero()
  
  {
  let n = Math.ceil(Math.random()*6);
  setdado(n)

  //console.log(demo)
}
 

 
     return (
    <div className='cont-rendercondicional'>
<h2>RenderCondicional</h2>
{dado && <p>{dado}</p>}

{dado ? <p>{dado}</p> : <p>aperta ai o botao</p>}
    {dado}
    <button onClick={sortearnumero}>Sorteia</button></div>
  )
}


export default RenderCondicional