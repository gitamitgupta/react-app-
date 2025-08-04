import { useEffect, useState } from "react"
import {TodoProvider} from "./contexts"
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";


function App() {
 
  const [todos,setTodos]=useState([]);
    const addTodo=(todo)=>{
      // alwaye use the { ...something } (Spread Operator)
      setTodos((prev)=>[{id:Date.now(),...todo},...prev])

    }
    const updatedTodo=(id,todo)=>{
      setTodos((prev)=>prev.map((value)=>value.id===id ? todo : value))
    }
    const deleteTodo=(id)=>{
      setTodos((prev)=>prev.filter((value)=>value.id !==id))
    }
    const toggleComplete=(id)=>{
       // alwaye use the { ...something } (Spread Operator)
      setTodos((prev)=>prev.map((value)=>value.id===id? {...value,completed:!value.completed}: value))
    }
     useEffect(()=>{
      const todos= localStorage.getItem("todos")
      if(todos && todos.length >0 ){
        setTodos(todos);
      }
     },[])
     useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(todos))
     },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todos.map((todo)=>(
                        <div key={todo.id} className="w-full">
                           <TodoItem  todo={todo}/>
                        </div>
                      ))}
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
