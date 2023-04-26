import { useState , useEffect } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hools/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';






export const GifGrid = ( {category} ) => {

    // const [images, setImages] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // const getImages = async () =>{
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    const {images, isLoading} = useFetchGifs(category);

    //si dejo en vacio ( [ ] ) , significa que este huck se ejecuta una ves al inicio
    //Si yo dejo las dependencias vacías significa que este solo se va a disparar la primera 
    //vez que se crea
//  useEffect(() => {
//     // getGifs(category);
//     getImages();
 
//     }, [])
    

 
    //console.log(images);
  return (
    <>
     <h3>{category}</h3>
     { isLoading && <h2>Cargando...</h2>}
    <div className="card-grid">
    {
        images.map( (image) =>
            // (<li key={id}> {title} </li>)
            (<GifItem key={image.id} {...image} />)
        )
    }
    </div> 
    
    </>
  )
}
