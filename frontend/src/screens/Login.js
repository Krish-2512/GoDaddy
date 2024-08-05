import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';




function Login() {
const navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=async(e)=>{
      e.preventDefault()
      await axios.post('http://localhost:5000/food/login-user',{email,password},{headers:{
"Content-Type":"application/json"                       //! The server uses this header to understand how to parse the request body. In this case, it knows that it should expect JSON and parse it accordingly.
      }})
      .then(data=>{console.log(data.data);setEmail('');setPassword('');
if(data.data.success){


localStorage.setItem('authToken',data.data.authToken);
console.log(localStorage.getItem('authToken'));
localStorage.setItem('userEmail', email); // Store user email
navigate('/');
}


      })
      .catch(err=>{console.log(err); alert('Please enter valid credentials')})
  }
  return (
//     <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
//      <div>
//         <Navbar />
//       </div>
//       <div className='container'>
//       <form onSubmit={handleSubmit}>
      
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"value={email} onChange={(e)=>setEmail(e.target.value)}/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"value={password} onChange={(e)=>setPassword(e.target.value)}/>
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="m-3 btn btn-success ">Submit</button>
//   <Link to='/signup' className="m-3 btn btn-danger">Don't have an account</Link>
 
// </form>
// </div>
//     </div>
<div>
<div>
    <Navbar />
  </div>
<div
  style={{
    backgroundImage: 'url("/restaurant.jpg")',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>

  <div className="container" style={{ maxWidth: '400px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',color:'black' }}>
    <h2 className="text-center mb-4">Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderRadius: '5px' }}
        />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderRadius: '5px' }}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          style={{ cursor: 'pointer' }}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="m-3 btn btn-success" style={{ borderRadius: '5px', width: '30%' }}>Submit</button>
      <Link to="/signup" className="m-3 btn btn-danger" style={{ borderRadius: '5px', width: '50%' }}>Don't have an account?</Link>
    </form>
  </div>
</div>


</div>
  )
}

export default Login
