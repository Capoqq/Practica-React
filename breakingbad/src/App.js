
import styled from "@emotion/styled";
import { useState,useEffect } from "react";
import Frase from "./components/Frase";
const Contenedor = styled.div`
display:flex;
align-items:center;
padding-top:5rem;
flex-direction:column;
`;
const Boton = styled.button`
background: linear-gradient(0deg, rgba(47,101,186,1) 3%, rgba(47,133,186,1) 21%, rgba(43,46,46,1) 98%);
background-size:300px;
font-family:Arial, Helvetica, sans-serif;
color:#fff;
margin-top:3rem;
padding:2rem;
font-size:2rem;
border:2px solid black
`;
function App() {
  //state frase
  const [frase,guardarFrase] = useState({
  })

  const consultarAPI = async () =>{
   const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    /* const frase = api.then(respuesta => {
      return respuesta.json()
    })
   frase.then(resultado => console.log(resultado)) */
   const frase = await api.json()
   /* console.log(frase[0]) */
   guardarFrase(frase[0])
  }
  //Cargar una frase 
  useEffect (()=>{
      consultarAPI()
  },[])
  return (
    <Contenedor>
    <Frase  frase={frase} />
    <Boton onClick={() => consultarAPI() }>
       Obtener Frase
    </Boton>
    </Contenedor>
  );
}

export default App;
