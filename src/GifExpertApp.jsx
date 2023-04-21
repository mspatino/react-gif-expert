import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    console.log(categories);

    const onAddCategory = (category) => {

        //console.log(category);

        setCategories([category,...categories]);
       // setCategories((cat) => [...cat,'max']);
    }


  return (
    <>
    {/* titulo*/ }
    <h1>GifExpertApp</h1>
    
    {/* Input */ }
    <AddCategory 
    // setCategories={ setCategories } 
    onNewCategory={ onAddCategory }
    />

    {/* <button onClick={ onAddCategory }>Agregar</button> */}
    {/* Listado de Gifs */ }
    <ol> { categories.map( (element) => <li key={element}>{ element }</li> ) }  </ol>

        {/* Gif Item */ }

    </>
    
  )
}
