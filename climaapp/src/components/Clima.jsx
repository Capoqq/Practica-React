import React from 'react'
const Clima = ({resultado}) => {
    //Extraer los valores
    const {name,main} = resultado;
    if(!name) return null

    //Grados kelvin
    const kelvin = 273.15

    return ( 
       <div className="card-panel white col s-12">
           <div className="black-text">
                <h2>
                    El clima de {name} es : 
                </h2>
                <p className="temperatura">{parseInt(main.temp - kelvin)} <span>&#x2103;</span></p>
                <p>Temperatura Maxima: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span></p>
                <p>Temperatura Minima: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span></p>
           </div>
       </div>
     );
}
 
export default Clima;