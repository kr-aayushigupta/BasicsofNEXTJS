// DATA FETCHING FROM API : everything is same as in react data fetching ... just make sure to include use client directive

// Data fetching in client component

// in client component you cannot use async and await directly .....you need to use that in useEffect hook
// while in server component you can just use it inside server component
"use client"
import {useState,useEffect} from "react";

type User={
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
};

export default function UsersClient(){
    const [users,setUsers]=useState<User[]>([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        async function fetchUsers(){
            try{
                const response=await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if(!response.ok) throw new Error ("Failed to fetch users");
                const data=await response.json();
                setUsers(data);
            }catch(err){
                setError("Failed to fetch users");
                if(err instanceof Error){
                    setError("Failed to fetch users : ${err.message}");
                }
            }finally{
                setLoading(false);
            }
        }
        fetchUsers();
    },[]);

    // conditional rendering

    if(loading) return <div>Loading.....</div>
    if(error) return <div>{error}.....</div>

    return (
        <ul className="space-y-4 p-4">
            {users.map((user)=>(
                <li
                    key={user.id}
                    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    );
}