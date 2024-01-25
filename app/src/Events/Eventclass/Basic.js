import React from 'react'
import {useState} from 'react'
export default function Basic() {
    const[inputValue,setInputValue]=useState(" ");
    const [displayMessage,setDiplayMessage]=useState(" ");
    const handleChange=(event)=>{
       setInputValue(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        setDiplayMessage(`You submitted :${inputValue}`);
    };
    
  return (
    <div>
        <p>{displayMessage}</p>
        <form onSubmit={handleSubmit}>
            <label>Type:</label>
            <input type='text' value={inputValue} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
  )
}
