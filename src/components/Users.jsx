import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    //delete function
    const handleDeleteUser = (id) =>{
        console.log('deleted id:',id);
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))

        //filterin the data
        const filterData = users.filter(users => users._id !== id);
        setUsers(filterData)
    } 
    return (
        <div>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        id: {user._id}
                        <br />
                        name: {user.name}
                        <br />
                        email:{user.email}
                        <br />
                        <Link to={`/update/${user._id}`}><button>update</button></Link>
                        <button onClick={()=>handleDeleteUser(user._id)}>delete</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;