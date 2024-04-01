import { useState } from "react";


export default function Dictionary(){
    let[keyword, setKeyword]=useState("")

    function search(event){
        event.preventDefault();
        alert (`Searching for ${keyword}`)
    }

    function handleWordChange(event){
        setKeyword(event.target.value);
    }
    return( 
    <div className="Dictionary">
        <form onSubmit={search}>
           <input type="search" onChange={handleWordChange}/>

        </form>
    </div>
    );
}