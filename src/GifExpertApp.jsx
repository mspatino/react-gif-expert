import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    console.log(categories);

    const onAddCategory = (category) => {

        //console.log(category);
        if (categories.includes(category)) return;
        setCategories([category,...categories]);
       // setCategories((cat) => [...cat,'max']);
    }

//hola mundo
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
    {/* <ol>  */}
    { categories.map( (element) => 

      <GifGrid key={ element } category={element}/>
      // <li key={element}>{ element }
      // </li> 
    )}  
    {/* </ol> */}

        {/* Gif Item */ }

    </>
    
  )
}
