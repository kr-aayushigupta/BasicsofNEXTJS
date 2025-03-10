// import React from 'react'
"use client"
import { useRouter } from "next/navigation";

function About() {
    const router=useRouter();
  return (
    <div>
        <h1>About page</h1>
        <button onClick={()=>{router.push("/")}}
            className="bg-blue-400 text-black p-2 rounded-md">Go Home</button>
    </div>
    
  )
}

export default About;