import { createContext } from 'react';
// this is golble context  yaha se data mile ga childern ko
const UserContext = createContext(); 
// here This context will let you share data (like user info) 
// between components — without passing props manually at every level.

export default UserContext;