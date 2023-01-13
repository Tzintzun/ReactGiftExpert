import {React, useState} from "react";
import { AddCategory, GiftGrid } from "./componentes";



export const GiftExpertApp = () =>{

    //creamos un estado para las categorias
    const [Categorias, setCategorias] = useState(['Rick and Morty'])

    //creamos una funcion para agregar categorias
    const addCategoria = (valor)=>{
        if(Categorias.includes(valor)) return;
        setCategorias([valor, ...Categorias]);

    }
    
    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory setCategoria = {addCategoria} />
            
            {
                Categorias.map((categoria) =>(<GiftGrid key={categoria} categoria={categoria}/>))
            }
            
        </>
    );
};