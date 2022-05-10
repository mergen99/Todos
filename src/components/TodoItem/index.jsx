import React, { useState } from "react";
import Check from "../Checkbox/check";
import "./list.scss";
import { AiOutlineDelete } from "react-icons/ai";

const TodoItem = ({ todo, changeTodo, deleteTask}) => {
  return (
    <div className="list" onClick={() => changeTodo(todo.id)}>
      <Check isCompleted={todo.isCompleted} />
      {todo.isCompleted ? <strike> {todo.title} </strike> : todo.title}
      <AiOutlineDelete className="icon" onClick={deleteTask}  id={todo.id}/>
    </div>
  );
};

export default TodoItem;
