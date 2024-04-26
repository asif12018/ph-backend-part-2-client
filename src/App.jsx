
import './App.css'

function App() {
  
  const handleAddUser = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name,email}
    
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        form.reset();
    })
  }

  return (
    <>
      <h1>simple crud app</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' id='' placeholder='enter your name'/>
        <br />
        <input type="email" name='email' id='' placeholder='enter your email'/>
        <br />
        <input type="submit" value={'Add user'} />
      </form>
    </>
  )
}

export default App
