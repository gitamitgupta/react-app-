import React from "react"
import UserContext from "./context/Usercontext"
import UserContextProvider from "./context/Usercontextprovider"
import Login from "./component/login"
import Profile from "./component/profile"
function App() {
  return (
    <>
      <UserContextProvider>
        <Login/>
        <Profile/>
        </UserContextProvider> 

     
      
    </>
  )

}

export default App
