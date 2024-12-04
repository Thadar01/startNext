import React from 'react'

interface User{
  id:number;
  name:string;
}

const UsersPage = async () => {
 const res=await fetch('https://jsonplaceholder.typicode.com/users',
  // //to get the update data
  // {next:{revalidate:10}} //refresh data from the backend every 10 seconds
  {cache:'no-store'}
 );
  const users:User[]=await res.json();

  return (
   <>
   <h1>Users</h1>
   <p>{new Date().toLocaleTimeString()}</p>
   <ul>
    {users.map(user=><li key={user.id}>{user.name}</li>)}
   </ul>
   </>
  )
}

export default UsersPage