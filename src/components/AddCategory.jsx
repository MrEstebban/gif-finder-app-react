import {React, useState} from 'react'


export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState([''])

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        
        if(inputValue.trim().length <= 1){return; }

        // props.onAddCategory(categories => [inputValue, ...categories]);
        props.onNewCategory(inputValue.trim());

        setInputValue('');
    }

  return (
    <form onSubmit={event => onSubmit(event)}>
        <input 
            type="text" 
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange={event => onInputChange(event)}
        />
    </form>

  )
}
