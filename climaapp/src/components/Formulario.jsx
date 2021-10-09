import React from 'react';
import { useState } from 'react';
const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {

//State del formulario
 
    const [error,guardarError] = useState(false)
    //Extraer ciudad y pais
    const {ciudad,pais} = busqueda;
    //Funcion que coloca los elementos en el state
    const handleChange = (e) => {
        //Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    //Cuando el usuario da Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        //Validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true)
            return false
        }else{
            guardarError(false)
           guardarConsultar(true)
        }

    }
    return ( <form onSubmit={handleSubmit}>
        {error ?<p className="red darken-4 error">Todos los campos son obligatorios</p>: null}
        <div className="input-field col s12">
            <input onChange={handleChange} type="text" value={ciudad || ''} name="ciudad" id="ciudad" />
            <label htmlFor="ciudad">Ciudad:</label>
        </div>
        <div className="input-field col s12">
            <select onChange={handleChange} value={pais || ''} name="pais" id="pais">
                <option value="">-- Seleccione un pais --</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
            </select>
            <label htmlFor="pais">Pais:</label>
        </div>
        <div className="input-field col s12">

        <input value="Buscar Clima" className="waves-effect waves-light btn-large btn-block yellow accent-4" type="submit"/>
        </div>
    </form> );
}
 
export default Formulario;