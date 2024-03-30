import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, editTodo } from "./redux/Slice";

function Todo() {
  const [items, setitems] = useState("");

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(items));
    setitems("");
  };

  const edittodo = (id,newText) =>{
    dispatch(editTodo({id,newText}))
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="font-bold text-3xl">Todo App with Redux</h1>
      <form onSubmit={handlesubmit} className="flex justify center">
        <input
          value={items}
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Type in your Tasks"
          onChange={(e) => setitems(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
      {todos.map(val=>{
        return (
          <div className="m-2">
          <input className="bg-transparent" value={val.text} onChange={(e)=> edittodo(val.id, e.target.value)} />
          <button className="btn btn-error" onClick={()=>dispatch(removeTodo(val.id))} >Delete</button>
          </div>
        )
      })}
      <h1>Click on the Todo Texts to Edit</h1>
       
    </div>
  );
}

export default Todo;
