import { v4 as uuidv4 } from "uuid";
import React, { useState } from 'react'
import Addinput from './Addinput'
import Itemscontainer from './Itemscontainer'
const Todocontainer = () => {
    const [todos, setTodos] = useState([
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ]);
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const addTodoItem = (title) => {
        if(title.trim()) {
            const newItem = {
                id: uuidv4(), 
                title,
                completed:false,
            };
            setTodos((prevState) => [...prevState,newItem])
            setInput('')
            setMessage('')
        } else {
            setMessage('You have to add something !!')
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoItem(input)
    }

    const handleChange = (id) => {
        setTodos((prevState) => {
          return prevState.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          });
        });
      };

    const delTodo = (id) => {
        setTodos((prevState) => {
            return prevState.filter(todo => todo.id !== id)
        })
    }


      
  return (
    <div>
      <Addinput  input={input} handleInput = {handleInput} message={message} handleSubmit={handleSubmit}></Addinput>
      <Itemscontainer todos={todos} delTodo={delTodo}  handleChange={handleChange}></Itemscontainer>
    </div>
  )
}

export default Todocontainer
