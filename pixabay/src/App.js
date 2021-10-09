import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario';
import { useState,useEffect } from 'react';
import axios from 'axios';
import ListadoImagenes from './components/ListadoImagenes';
function App() {
  //State de la app

  const [busqueda,guardarBusqueda] = useState('');
  const [imagenes,guardarImagenes] = useState([]);
  const [paginaactual,guardarPagina] = useState(1);
  const [totalPaginas,guardarTotal] = useState(1)
  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === '') return;
      const imagenesPorPagina = 30;
      const key = '23719445-b72552a528b630820e311ca59';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;
   
      const respuesta = axios.get(url);
      const resultado = respuesta.then(res =>{
        guardarImagenes(res.data.hits)
     //Calcular el total de paginas
        const calcularTotalPaginas = Math.ceil(res.data.totalHits/imagenesPorPagina);
        guardarTotal(calcularTotalPaginas)
        //mover la pantalla

        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({behavior: 'smooth' })
      })
    }
    consultarApi()
  }, [busqueda,paginaactual])

  //Definir la pagina anterior

  const paginaAnterior = () =>{
    const nuevaPaginaActual = paginaactual - 1;
    if(nuevaPaginaActual === 0) return;
    guardarPagina(nuevaPaginaActual)
  }
  const paginaSiguiente = () =>{
    const nuevaPaginaActual = paginaactual + 1;
    if(nuevaPaginaActual > totalPaginas) return;
    guardarPagina(nuevaPaginaActual)
  }
  
  return (
    <div className="container">
      <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Formulario guardarBusqueda={guardarBusqueda}/>
      </div>
    <div className="row justify-content-center">

     <ListadoImagenes imagenes={imagenes}/>
    {(paginaactual === 1) ? null : (
       <button type="button" onClick={paginaAnterior} className="btn btn-info mr-1">
       Anterior &laquo;
    </button>
    )}
    {(paginaactual === totalPaginas ? null : (
       <button onClick={paginaSiguiente} type="button" className="btn btn-info">
       Siguiente &raquo;
    </button>
    ))}
    </div>
    </div>
  );
}

export default App;
