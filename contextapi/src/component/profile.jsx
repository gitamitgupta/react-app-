import React, { useContext } from 'react';
import UserContext from '../context/Usercontext';

const Profile = () => {
   const {user}=useContext(UserContext);
   if(!user)return <div> plz login the user </div>

   return (
    <div>
        welcome the user {user.username} 
    </div>
   )
};

export default Profile;