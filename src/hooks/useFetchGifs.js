import React, { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [ isLoading, setIsLoading ] = useState (true);

    //Creamos una funcion asincrona para obtener las imagenes
    //Asincrona porque dependemos de la respuesta del API
    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading (false);
    }

    useEffect(() => {
        getImages();
    }, []);


    return {
        images,
        isLoading
    }
}
