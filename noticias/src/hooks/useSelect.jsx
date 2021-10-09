import React,{useState} from 'react'

const useSelect = (stateInicial,opciones) => {
    //State del custom hook
    const [state,actualizarState] = useState(stateInicial)


   const SelectNoticias = () =>{
       return (

       <select name="" id="" value={state} onChange={e => actualizarState(e.target.value) } className="browser-default">
          {opciones.map(opcion =>(<option key={opcion.value} value={opcion.value}>{opcion.label}</option>))}
       
       </select>
       )
   }
   return [state,SelectNoticias]
}
 
export default useSelect;