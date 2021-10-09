import logo from './logo.svg';
import './App.css';
import { Fragment,useState,useEffect } from 'react';
import Formulario from './Components/Formulario';
import Cancion from './Components/Cancion';
import Info from './Components/Info';
import axios, { Axios } from 'axios';

function App() {
  //Definir el state

  const [busquedaletra,guardarBusquedaLetra] = useState({});
  const [letra,guardarLetra] = useState('');
  const [informacionArtista, guardarInformacionArtista] = useState({})
  useEffect(() =>{
    const realizarBusqueda = async () =>{
      const {artista,cancion} = busquedaletra;
      console.log(busquedaletra)
      if(Object.keys(busquedaletra).length === 0) return false
      let url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      let url2= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const [letra, informacion] = await Promise.all([
        axios.get(url),axios.get(url2)
      ])
        guardarLetra(letra.data.lyrics)
        guardarInformacionArtista(informacion.data.artists[0])
        //guardarLetra(respuesta.data.lyrics)
    }
    realizarBusqueda()
  },[busquedaletra])
  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra}/>
      <div className="container d-flex mt-5">
        <div className="col-md-6">
          <Cancion letra={letra}/>
        </div>
        <div className="col-md-6">
          <Info info={informacionArtista}/>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
