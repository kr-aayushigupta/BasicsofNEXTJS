"use client"
import { useEffect } from "react";
export default function Error(
    {error}:{error:Error}
){

    useEffect(()=>{
        console.log(error);
    },[]);
    return (
        <div className="flex items-center justify-center h-screen">
        
        <div className="text-red-700 text-2xl ">Error occured : Error in fetching users data</div>
        
        </div>
        );
}