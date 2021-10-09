import React, {createContext,useState,useEffect} from 'react'
import axios from 'axios';

//Crear el context

export const CategoriasContext = createContext();

//Provider es donde se encuenteras las funciones y state

const CategoriasProvider = (props) =>{
    const [categorias,guardarCategoria] = useState([])
    useEffect(()=>{
        const consultarCategoria = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const respuesta = await axios.get(url)
            guardarCategoria(respuesta.data.drinks)
        }
        consultarCategoria()
    },[])
    return (
        <CategoriasContext.Provider value={{categorias}}>
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;