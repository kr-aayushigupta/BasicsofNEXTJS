"use client" //include this directory to ensure your component is rendered as client component

import {useState} from 'react';

export const Counter =()=>{
    console.log("Counter Component : it uses useState hook , hence it must be used as a client component");

    const [count,setCount]=useState(0);

    return (
        <button onClick={()=>setCount(count+1)}>Clicked {count} times !!</button>
    )
}