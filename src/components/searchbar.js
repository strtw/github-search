import React, {useState} from "react";

const SearchBar = ({onClick,placeHolder})=>{
    const [value,setValue] = useState('')
    return(
        <div>
            <input type='text' placeholder={placeHolder} onChange={(e) => setValue(e.target.value)}></input>
            <button disabled={!value} onClick={()=> onClick(value)}>Search</button>
        </div>
        
    )
}
export default SearchBar;