import { useState } from "react";
import {AgregarTarea} from './agregarTarea'



// keycode + = 187
// key code , = 188
// key code - = 189
//  key code enter = 13

const Item = ({nombre, visto}) => {
  
  return (
    <li>
      {nombre} 
      {visto ? '✅': '⚠️'}
    </li>
  )
}

export const ListadoApp = () => {
    let listadoSecciones = [ ]

const [sumaTotal, setSumaTotal] = useState (0)

const [arreglo, setArreglo] = useState(listadoSecciones)


const onAgregarTarea = (val)=>{
  const envio = {
    id: arreglo.length,
    nombre: val,
    visto: false
}
  // console.log(val)
  setArreglo([...arreglo,envio])
  setSumaTotal(sumaTotal + parseInt(val))

}

return (<div style={{color: 'white', padding: '50px'}}>
      
      <AgregarTarea agregarTarea={onAgregarTarea}/>
      <ol style={{textAlign:'end'}}>
        {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto} />)}
      </ol>
      <div style={{textAlign:'end', fontSize:'30px', color:'green'}}>
        Res: $ {sumaTotal}
      </div>
        </div>
)};