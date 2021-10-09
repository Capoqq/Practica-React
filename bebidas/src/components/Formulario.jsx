import React, {useContext} from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { useState } from 'react';
const Formulario = () => {
    const {categorias} = useContext(CategoriasContext);
    const [busqueda,guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    //Funcion para leer los campos

    const obtenerDatos = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    return (  
        <form action="" className="w-100">
            <fieldset className="col-12">
                <legend className="text-center">
                    Buscar bebidas por Categoria o Ingrediente
                </legend>
            </fieldset>
            <div className="row w-100 mt-4">
                <div className="col-md-4">
                    <input onChange={obtenerDatos} type="text" name="nombre" className="form-control" placeholder="Buscar por Ingrediente" />
                </div>
                <div className="col-md-4">
                   <select onChange={obtenerDatos} className="form-control" name="categoria" id="">
                       <option value="">-- Selecciona Categoria</option>
                       {categorias.map((categoria)=> (
                          <option key= {categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                       ))}
                   </select>
                </div>
                <div className="col-md-4">
                        <input type="submit" className="btn btn-block btn-primary" value="Buscar Bebidas" />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;