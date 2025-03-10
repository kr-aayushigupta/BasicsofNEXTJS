type User={
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
};

// for data fetching from server component use async function

// in server side rendering the loading and error state are automatically handled by next js ....while in client side we had to manually update the states
export default async function UsersClient(){

    await new Promise(resolve=>setTimeout(resolve,2000));

    const res=await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users=await res.json();

    return (
        <ul className="space-y-4 p-4">
            {users.map((user:User)=>(
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