import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import { useState,useEffect } from 'react';
import Clima from './components/Clima';
import Error from './components/Error';
function App() {
  const [busqueda,guardarBusqueda] = useState({
    ciudad:'',
    pais:''
});
const [consultar, guardarConsultar]= useState(false)
const {ciudad,pais} = busqueda;
const [resultado,guardarResultado] = useState({});
const [error,guardarError] = useState(false);
useEffect(() => {
  const consultarAPI = async () =>{
    if(consultar){
      const appId='2570debc22836fe77eeb4b08ddf362fd';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    const respuesta = await fetch(url);
    const resultado = await respuesta.json()
    
    guardarResultado(resultado)
    guardarConsultar(false)
    //Detecta si hubo resltados correctos en la consulta
    if(resultado.cod === '404'){
      guardarError(true)
    }else{
      guardarError(false)
    }
    }
  }
  consultarAPI()
}, [consultar])
let componente
if(error){
componente = <Error mensaje="No hay resultados"/>
} else{
  componente =  <Clima resultado = {resultado}/>
}
  return (
    <Fragment>
      <Header titulo='Clima React App'/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
              <div className="col m6 s12">
                <Formulario busqueda={busqueda} guardarBusqueda={guardarBusqueda} guardarConsultar={guardarConsultar}/>
              </div>
              <div className="col m6 s12">
                {componente}
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
