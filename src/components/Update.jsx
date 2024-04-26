import { useLoaderData, useParams } from "react-router-dom";


const Update = () => {
    const user = useLoaderData();
    const paramsId = useParams();
    const id = paramsId.id;
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name,email}
        //sending data to backend
        fetch(`http://localhost:5000/users/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h3>Update profile of : {user.name}</h3>
            <p>email: {user?.email}</p>
            <form onSubmit={handleUpdate}> 
                <input type="text" name="name" defaultValue={user?.name} />
                <br />
                <input type="email" name="email" defaultValue={user?.email} />
                <br />
                <input type="submit" value={'update'} />
                
            </form>
        </div>
    );
};

export default Update;