import React, { useState } from "react";
import styles from "../styles/TodoItem.module.css";
const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  const [editing, setEditing] = useState(false);

  let viewMode = {};
  let editMode = {};

  editing ? viewMode.display = "none " : editMode.display = "none"

  const handleEditing = () => {
    setEditing(true);
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={() => delTodo(itemProp.id)}>
          Delete
        </button>
        <button type="button" onClick={handleEditing}>
          Edit
        </button>
        {itemProp.title}
      </div>
      <input type="text" className={styles.textInput} value={itemProp.title} style={editMode} />
    </li>
  );
};

export default TodoItem;
