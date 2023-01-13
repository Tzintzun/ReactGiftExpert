import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (categoria) => {
  
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //Ejecuta ciertas partes del componente, solo cuando se disparan ciertas condiciones.
    //Si dejamos el array de condiciones en blanco, solo se ejecutara al inicio
    useEffect(() =>{
        getGifs(categoria).then(imagenes => {
            setGifs(imagenes); 
            setIsLoading(false);
        });
    }, [ ])
    return {
            gifs,
            isLoading
        }
    
}
