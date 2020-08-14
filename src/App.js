import React, { useState, useEffect } from 'react'

import TodoForm from './components/TodoForm/index'
import TodoList from './components/TodoList/index'

import './App.css';

const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos){
      setTodos(storageTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(todo){
    setTodos([todo, ...todos])
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo, completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>To-Do List</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </header>
    </div>
  );
}

export default App;
