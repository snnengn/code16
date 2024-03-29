import React, { useState } from 'react';
import Input from './input';
import Button from './button';
import Result from './result';

function Convert() {
  const [derece, setDerece] = useState('');
  const [sonuc, setSonuc] = useState('');

  function handleClick(event) {
    const inputValue = parseFloat(derece);

    if (!derece.trim()) {
      alert("Lütfen bir derece değeri girin.");
      return;
    }

    if (event.target.id === 'kel') {
      const kelvinSonuc = (inputValue + 273).toFixed(2);
      setSonuc(`Sonuç: ${kelvinSonuc} °K`);
    } else if (event.target.id === 'fah') {
      const fahrenheitSonuc = ((9/5) * inputValue + 32).toFixed(2);
      setSonuc(`Sonuç: ${fahrenheitSonuc} °F`);
    }

    setDerece('');
  }

  function handleChange(event) {
    const inputValue = event.target.value;
    setDerece(inputValue);
  }

  return (
    <div className="main" >
      <h3 className='baslik'>Sıcaklık Dönüştürücü</h3>
      <div className='input'><Input value={derece} onChange={handleChange} /></div>
      <div className='buttons'>
      <Button onClick={handleClick} id='kel' text="Kelvin'e Çevir" />
      <Button onClick={handleClick} id='fah' text="Fahrenheit'a Çevir" />
      </div>
      <Result sonuc={sonuc} />
    </div>
  );
}

export default Convert;