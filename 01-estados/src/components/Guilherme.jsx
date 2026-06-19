
import React, { useState } from 'react';

function Guilherme() {
  const [resultado, setResultado] = useState(null);

  const verEquipe = () => {
    const pj = Number(prompt('Quantidade de PJ:'));
    const rh = Number(prompt('Quantidade de RH:'));
   
    setResultado(pj + rh);
  };

  return (
    <div className="Guilherme voce-e-louco">
      <h2>Guilherme o bagual</h2>
      <button onClick={verEquipe}>Equipe</button>
      {resultado !== null && <p>Calcular equipe: {resultado}</p>}
    </div>
  );
}

export default Guilherme;
