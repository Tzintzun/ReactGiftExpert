import { useState } from "react"

export const AddCategory = ({setCategoria})=>{

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        const categoria_limpia = inputValue.trim();
        if(categoria_limpia.length<1)return;
        setCategoria(categoria_limpia);
        setInputValue('');
    };
    return (
        <form onSubmit={onSubmit }>
            <input
                type="text"
                id="input-categoria"
                placeholder="Buscar Gifs"
                onChange={onInputChange}
                value={inputValue}
             />
        </form>
    );
}