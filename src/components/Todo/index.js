import React from 'react'
import deleteIcon from '../../assets/delete.png'

import './styles.css'

function Todo({ todo, toggleComplete, removeTodo }){
    function handleCheckboxClick(){
        toggleComplete(todo.id)
    }

    function handleRemoveClick(){
        removeTodo(todo.id)
    }

    return(
        <div className="todo">
            <input maxLength="38" type="checkbox" onClick={handleCheckboxClick}/>
            <li
                style={{color: "black", textDecoration: todo.completed ? "line-through" : null}}>
                {todo.task}
            </li>
            <button onClick={handleRemoveClick}><img src={deleteIcon} alt="delete"/></button>
        </div>
    )
}

export default Todo