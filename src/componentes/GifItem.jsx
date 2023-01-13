import React from 'react'

export const GifItem = ({titulo, url}) => {
  return (
    <div className='card'>
        <p>{titulo}</p>
        <img src={url} alt={titulo}/>
    </div>
  )
}
