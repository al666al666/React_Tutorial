import React, { useState, useReducer } from 'react';
import RenderTodo from './RenderTodo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO :
            return todos.map(todo=>{
                if(todo.id===action.payload.id) {
                    return {...todo,complete:!todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(ele=>ele.id!==action.payload.id)
            
        default:
            return todos
    }
}
    function newTodo(name) {
        return {
            id: Date.now(),
            name: name,
            complete: false
        }
    }

export default function Todo() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState("")

    function addTodo(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        console.log(todos)
    }



    return (
        <>
            <form onSubmit={addTodo}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(todo => {
                 return<RenderTodo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </>
    )


}