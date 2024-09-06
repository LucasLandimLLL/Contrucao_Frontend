"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Logo from '../components/Logo';

export default function Home() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < 6; i++) {
      newNumbers.push(Math.floor(Math.random() * 61));
    }
    setNumbers(newNumbers);
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', paddingTop: '20px' }}>
      <h1>Bem-vindo ao Sorteio da Mega Sena</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Logo />
      </div>
      <button className="btn btn-success" style={{ width: 'auto' }} onClick={generateNumbers}>Sortear Números</button>
      {numbers.length > 0 && (
        <div>
          <h3>Números Sorteados:</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {numbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
