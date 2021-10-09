import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import { Fragment,useState,useEffect } from 'react';
function App() {

  //Definir categoria y noticias
  const [categoria,guardarCategoria] = useState('');
  const [noticias,guardarNoticias] = useState([])
  useEffect(() =>{
    const consultarApi = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=ba22441564764abc81b0e4134a115080`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
     
      guardarNoticias(noticias.articles)
    }
    consultarApi()
  },[categoria])

  return (
   <Fragment>
     <Header titulo="Buscador de noticias"/>
     <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}/>
     <ListadoNoticias noticias={noticias} />
     </div>
   </Fragment>
  );
}

export default App;
