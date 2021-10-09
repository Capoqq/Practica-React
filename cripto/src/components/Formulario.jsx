import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import Error from './Error';
const Boton = styled.input`
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color:#66a2f3;
    border:none;
    width:100%;
    border-radius:10px;
    color:#FFF;
    transition: all .3s ease;
    &:hover{
        background-color:#326ac0;
        cursor:pointer;
    }
`
const Formulario = ({guardarCriptomoneda,guardarMoneda}) => {
    //state del listado de criptomonedas
    const [listacripto,guardarCriptomonedas] = useState([])
    const [error,guardarError] = useState(false)
    const MONEDAS = [
        {codigo:'USD',nombre:'Dolar de estados unidos'},
        {codigo:'MXN',nombre:'Peso Mexicano'},
        {codigo:'COP',nombre:'Peso Colombiano'},
        {codigo:'EUR',nombre:'Euro'},
        {codigo:'GPD',nombre:'Libra Esterlina'}
    ]
    //Utilizar useMoneda
    const[moneda,SelectMonedas,actualizarState] = useMoneda('Elige tu Moneda','',MONEDAS);
    //utilizar cripo moneda

    const [criptomoneda,SelectCripto] = useCriptomoneda('Elige tu criptomoneda','',listacripto);

    //Ejecutar llamado a la api
    useEffect(()=>{
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const resultados = await axios.get(url);
            guardarCriptomonedas(resultados.data.Data)
            
        }
        consultarAPI()
    },[])
    //Cuando el usuario hace submit
    const cotizarMoneda = (e) => {
        e.preventDefault()
        //Validar si ambos campos estan llenos
        if(moneda === "" || criptomoneda === ""){
            guardarError(true)
            return
        }
        //Pasar los datos al componente principal
        guardarError(false)
        guardarCriptomoneda(criptomoneda)
        guardarMoneda(moneda)
    }
    return ( 
        <form onSubmit={cotizarMoneda}>
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            <SelectMonedas/>
            <SelectCripto/>
            <Boton type="submit" value="calcular"  />
        </form>
     );
}
 
export default Formulario;