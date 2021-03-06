import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import { useState } from 'react';
const Contenedor = styled.div`
  max-width:600px;
  margin:0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color:#fff;
  padding:3rem;

`;


function App() {
  const [resumen,guardarResumen] = useState({
    cotizacion: 0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  });
  const [cargando,guardarCargando] = useState(false);
  //Extraer Datos
const {datos,cotizacion} = resumen
  /* const {datos} = resumen */
  return (
  <Contenedor>
    <Header
  titulo="Cotizador de seguros"
  />
  <ContenedorFormulario>
    <Formulario guardarResumen={guardarResumen} guardarCargando={guardarCargando} />
       {/* {datos ? <Resumen/> : null }   */}
       {cargando ?  <Spinner/> : null }
      
       <Resumen datos={datos}/>
       {!cargando ? <Resultado cotizacion={cotizacion} /> : null }
       
  </ContenedorFormulario>
  </Contenedor>
  );
}

export default App;
