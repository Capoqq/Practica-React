import React from 'react'
import { useState } from 'react';
const Formulario = ({guardarBusquedaLetra}) => {
    const [busqueda,guardarBusqueda] = useState({
        artista:'',
        cancion:''
    })
    const [error,guardarError] = useState(false)
    //Funcion a cada input para leer contenido
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })};
    const {artista, cancion} = busqueda;

    //Consultar las APIS
    const buscarInformacion = e =>{
        e.preventDefault();
        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return
        }
        //Todo bien pasar al componente
        guardarError(false);
       guardarBusquedaLetra(busqueda)

    }
    return ( 
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>: null}
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" action="">
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artista</label>
                                        <input value={artista} onChange={actualizarState} type="text" className="form-control" name="artista" placeholder="Nombre Artista" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label htmlFor="">Cancion</label>
                                        <input value={cancion} onChange={actualizarState} type="text" className="form-control" name="cancion" placeholder="Nombre Cancion" />
                                    </div>
                                </div>
                            </div>
                            <button onClick={buscarInformacion} type="submit" className="btn btn-primary float-right" >
                                    Buscar
                            </button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;