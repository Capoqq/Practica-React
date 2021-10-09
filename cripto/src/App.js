import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';
const Contenedor = styled.div`
max-width:900px;
margin:0 auto;
@media(min-width:992px){
  display:grid;
  grid-template-columns:repeat(2,1fr);
  column-gap:2rem;
}
`;
const Imagen = styled.img`
 max-width:100%;
 margin-top:5rem;

`;
const Heading = styled.h1`
font-family:'Bebas Neue', cursive;
color:#fff;
text-align:left;
font-weight:700;
font-size:50px;
margin-bottom:50px;
margin-top:80px;
 
&::after{
  content:'';
  width:100px;
  height:6px;
  background-color: #66a2fe;
  display:block;
}
`
function App() {
  const [moneda,guardarMoneda] = useState('');
  const [criptomoneda,guardarCriptomoneda] = useState('');
  const [cotizacion,guardarCotizacion] = useState('');
  const [cargando,guardarCargando] = useState(false)
  useEffect(()=>{
    const cotizarCripto = async () =>{
       //evitamos la ejecucuion la primera ves
    if(moneda === '') return;
    //Consultar la api

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    let resultado = await axios.get(url);
    guardarCargando(true);
    setTimeout(()=>{
      guardarCotizacion(resultado.data.DISPLAY[criptomoneda][moneda])
      guardarCargando(false)
    },3000)
    }
    cotizarCripto()
  },[moneda,criptomoneda]);

  //Mostar spinner o resultado 
  const componente = (cargando) ? <Spinner/> : <Cotizacion resultado={cotizacion} />
  return (
  <Contenedor>
    <div>
      <Imagen src={image} alt="imagen cripto" />
    </div>
      <div>
        <Heading>
          Cotiza Criptomonedas al Instante
        </Heading>
        <Formulario guardarCriptomoneda={guardarCriptomoneda} guardarMoneda={guardarMoneda} />
        {componente}
      </div>
  </Contenedor>
  );
}

export default App;
