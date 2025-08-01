import React from 'react';
import { useState, useEffect } from 'react';

const GitHub = () => {
    const [data ,setdata] =useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/gitamitgupta').then(rep=> rep.json())
        .then( data =>{
            console.log(data)
            setdata(data)
        }
            
        )
 
    },[])

   
    return (
        <div className=' flex justify-center '>
            <h1>Welcome to the GitHub Component</h1>
            <p> Githubs  follower are  : {data.followers}</p>
            <img src={data.avatar_url} alt="git hub image " width={300} />
        </div>
    );
};

export default GitHub;