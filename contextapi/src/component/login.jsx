import React, { useContext, useState } from "react";
import UserContext from "../context/Usercontext";

function Login(){
    const [username,setusername]=useState("")
    const [password, setpassword]=useState("")
    const {setuser}= useContext(UserContext)
    //using the useContext() hook to access values from your UserContext — 
    // and you're specifically extracting only setuser from it.
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
        className="p-2 border"
        />{"           "}
        <input type="password"
         placeholder="password"
         value={password}
         onChange={(e)=>{setpassword(e.target.value)}} 
         className="p-2 border"
         />
     <button onClick={handleSubmit}>submit </button>
        </>
    )
}
export default Login;