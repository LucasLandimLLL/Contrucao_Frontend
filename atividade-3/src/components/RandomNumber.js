import { useState } from 'react';

const RandomNumber = () => {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 61);
    setNumber(randomNumber);
  };

  return (
    <div>
      <button onClick={generateNumber}>Gerar Número</button>
      {number !== null && <p>Número gerado: {number}</p>}
    </div>
  );
};

export default RandomNumber;
