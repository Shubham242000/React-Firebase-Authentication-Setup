import React, { useState } from "react";
import { signup, useAuth, logout, login } from './firebase'
import './App.css'
// import './App.scss'
function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const currentUser = useAuth()

  const handleSignUp = async () => {
    setLoading(true)
    try {
       await signup(email , password)
      }
    catch {
       alert("Error")          
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    setLoading(true)
    try {
      await logout()
    }
    catch {
      alert("Error")
    }
    setLoading(false)
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      await login(email , password)
    }
    catch {
      alert("Error")
    }
    setLoading(false)
  }

  
  console.log(currentUser)
  return (
    <div className="App">
      <img src = "/firebase.png" />
      <h1>FIREBASE AUTHENTICATION </h1> 
      
      {currentUser ? <p>Currently Logged in as : {currentUser?.email} </p>   : '' } 
      
      <div>
      {/* {error ? <p>Email is incorrect</p> : ''} */}
      <label>Email : </label>
      <input placeholder="email" type = "email" onChange = {
        e => setEmail(e.target.value)
      }/>
       <label>Password : </label>
      <input placeholder="password" type="password" onChange = {
        e => setPassword(e.target.value)
      }/>
      </div>
      <button onClick = {handleSignUp}
          disabled = {loading || currentUser }
      >SIGN UP</button>
       <button onClick = {handleLogin}
          disabled = {loading || currentUser }
      >LOGIN</button>
      <button
        onClick = {handleLogout}
        disabled = {loading || !currentUser}
      >LOGOUT</button>
      
    </div>
  );
}

export default App;
