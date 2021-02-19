import React, { useState } from "react";
import { BsFillXCircleFill } from "react-icons/bs";

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return (
    <>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons"></div>
          <BsFillXCircleFill 
          size= "20px"
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"/>
        </div>
      ))}
    </>
  );
}

export default Todo;
