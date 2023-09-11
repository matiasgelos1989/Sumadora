import {useState} from 'react'


export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setinputValue] = useState('')
    const onInputChange = (event)=>{
        if((event.nativeEvent.data >= 0 && event.nativeEvent.data <= 9) || event.nativeEvent.data === ','){
        // console.log(event)
        setinputValue(event.target.value)
        }else if (event.nativeEvent.data === '+' || event.nativeEvent.data === '-') {
            if(inputValue.length >0){
                agregarTarea(event.nativeEvent.data + inputValue)
                setinputValue('')
            }
        }
    }

    const onSubmit = (event)=>{
        
        event.preventDefault()
        if(inputValue.length >0){
        agregarTarea(inputValue)
        setinputValue('')
    }}




  return (
    <form style={{textAlign:'end'}} onSubmit={onSubmit}>
        <input 
            type='text'
            placeholder='ingresa una nueva tarea'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}