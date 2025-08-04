import { useState } from "react";
import useTodo from '/src/contexts/todocontext.js'; 

function TodoForm() {
    const [todo,setTodo]=useState("");
    const {addTodo}= useTodo()
    const add=(e)=>{
        e.preventDefault();
        // we cerate the todo in array of object imp 
        // we pass the object in addTodo which add todo in the todos state then store in the localstroage  
        addTodo({todo,completed:false});
        
        setTodo("")
        // This line clears the input field after you add a new todo.
        // this line reset the todo fild then the new feild will addd 

    }
    return (
        <form onSubmit={add} 
        className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>{setTodo(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

