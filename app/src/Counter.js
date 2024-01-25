import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [count,setCount]=useState(0);
    const [count1,setCount2]=useState(100);
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count +25)}>Click</button>
        <p>{count1}</p>
        <button onClick={()=>setCount2(count1 -15)}>Click button</button>
    </div>
    
  )
}
