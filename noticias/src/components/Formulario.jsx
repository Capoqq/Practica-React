import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
const Formulario = ({guardarCategoria}) => {
    //Utilizar custom HOOK
    const OPCIONES = [
        {value:'general',label:'General'},
        {value:'business',label:'Negocios'},
        {value:'entertaiment',label:'Entretenimientos'},
        {value:'health',label:'Salud'},
        {value:'sports',label:'Deportes'},
        {value:'technology',label:'Tecnologia'},
    ]
    const [categoria,SelectNoticias] = useSelect('general',OPCIONES);
    //Submit al form, pasar categoria a app.js

    const buscarNoticia = e =>{
        e.preventDefault();
        guardarCategoria(categoria);
    }
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticia}>
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input type="submit" className={`btn-large amber darken-2 ${styles.btn_block}`} value="Buscar" />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;