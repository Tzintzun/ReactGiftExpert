import {React} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GiftGrid = ({categoria}) => {
    
    const {gifs, isLoading} = useFetchGifs(categoria);
    
    
    return (
        <>
            <h3>{categoria}</h3>
            {
                isLoading  &&  (<h3>Cargando...</h3>)
            }
            <div className='card-grid'>
                {gifs.map(({id,title,url})=>(
                    <GifItem key={id} titulo = {title} url={url}/>
                ))}
            </div>
        </>
    )
}
