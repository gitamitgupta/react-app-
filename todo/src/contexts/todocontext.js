import { useContext ,createContext } from "react";

export const TodoContext= createContext({})


export const Todoprovider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}
