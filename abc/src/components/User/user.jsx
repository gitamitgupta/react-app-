import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const {userid}= useParams();
    return <>
    <p className=" bg-orange-600 text-3xl text-white"> USER :{userid}</p>
    </>
}

export default User ;