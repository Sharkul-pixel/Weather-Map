import React, { useState } from "react";

export default function SearchField(props) {
    const [inputData, setInputData] = useState("")
    
    function handleChange(event) {
       const {value} = event.target;
       setInputData(value);
    }

    return (
        <div className="search">
            <input 
                type="text" 
                placeholder="Enter City Name" 
                spellCheck="false"
                onChange={handleChange}/>
            <button onClick={() => props.location(inputData)}><img src="../images/search.png" alt="" /></button>
        </div>
    )
}