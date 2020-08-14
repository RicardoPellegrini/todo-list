import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './styles.css'

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (todo.task.trim()){
            addTodo({ ...todo, id: uuidv4()})
            setTodo({ ...todo, task: ""})
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                placeholder="What is your next task?"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button type="submit">Add task</button>
        </form>
    )
}

export default TodoForm