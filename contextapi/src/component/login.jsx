import React, { useContext, useState } from "react";
import UserContext from "../context/Usercontext";

function Login(){
    const [username,setusername]=useState("")
    const [password, setpassword]=useState("")
    const {setuser}= useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setuser({username,password})


    }
    return(
        <>
        <h2>User Login</h2>
        <input type="text" 
        placeholder="username" 
        value={username}
        onChange={(e)=>{setusername(e.target.value)}}
        />
        <input type="text"
         placeholder="password"
         value={password}
         onChange={(e)=>{setpassword(e.target.value)}} />
     <button onClick={handleSubmit}>submit </button>
        </>
    )
}