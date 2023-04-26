import axios from 'axios';


export const getGifs = async ( category ) => {

    const apiKey = 'qC3Q9bcqq4fOmuxhh8wZqKRT8G5SnTav';
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${category}&limit=10`;

    const peticion = await axios.get(url);

    const { data }  = await peticion.data;

    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

    }))

    // console.log(gifs);

    return gifs;
}