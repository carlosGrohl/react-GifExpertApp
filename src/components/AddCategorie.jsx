
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategorie = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        //console.log(event.target.value);
        setinputValue(event.target.value);
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        // si la funcion tiene menos de 2 caracteres hace un return
        if (inputValue.trim().length <=1) return;
        
        onNewCategory(inputValue.trim());
        setinputValue('');
    };

  return (
    <form onSubmit={ (event) => onSubmit(event) }  aria-label='form'>
        <input
            id='buscador'
            name='Buscador'
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            //onChange={(event) => onInputChange(event) }
            onChange={ onInputChange }
        />
    </form>
        
  )
}

//Obligamos que la funcion onNewCategory sea requerida
AddCategorie.propTypes ={
    onNewCategory: PropTypes.func.isRequired,
}