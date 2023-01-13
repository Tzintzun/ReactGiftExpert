export const getGifs = async (categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rNzSHCdAbtj76NpbmO8OYL55N2owA7jf&q=${categoria}&limit=5`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(({id,title,images}) => ({
        id:id,
        title:title,
        url: images.downsized_medium.url
    }))
    return gifs;
}