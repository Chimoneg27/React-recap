import React from "react";
import Todoitem from "./TodoItem";

const Itemscontainer = ({ todos, handleChange, delTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todoitem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

export default Itemscontainer;
