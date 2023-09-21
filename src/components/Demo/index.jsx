import React from 'react'
import { useState } from 'react'

export default function Demo() {
    const [num,setnum]  = useState()
    const [cout,setCount] = useState(0)
    const  changeNum = (e)=>{
        setnum(e.target.value)
    } 
    const  changeNum2 = (e)=>{
        setnum(e.target.value)
    } 
    const changeCount = ()=>{
        setCount(cout+1)
    }
    return (
    <div>
        <button onClick={changeCount}>cout+1</button>
        <h1>{cout}</h1>
        <h2>{cout}</h2>
        <input type="text" onChange={changeNum} value={num}/>
        <input type="text" onChange={changeNum2} value={num}/>
    </div>
  )
}
