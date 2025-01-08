import {useState} from 'react';
import { AddCategorie } from './components/AddCategorie';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([]);
  
    const onAddCategorie = (newCategory) =>{
        if (categories.includes(newCategory)) return; //valida si el campo ya existe
        setCategories ( [newCategory, ...categories] );
    };

    const onRemoveCategorie = (category) => {
        setCategories ( categories.filter( cat => cat !== category ));
    }

    const onOrderCategories = ( ) => {
        setCategories([...categories.sort()]);
        console.log (categories);
    }

    const onClearCategories = () => {
        setCategories([]);
    }

    return (
    <>
        <h1>GifExpertApp</h1>
        <button onClick={ onOrderCategories}> Ordenar </button>
        <button onClick={ onClearCategories}> Limpiar </button>
        <AddCategorie 
            onNewCategory = {(value) => onAddCategorie(value) }/>

        <hr/>

        { 
            categories.map( (category) => ( 
                <GifGrid 
                    key={  category }
                    category = { category }
                    onRemoveCategorie = { () => onRemoveCategorie(category) }
                    />
        ))
        }
        
    </>
  )
};