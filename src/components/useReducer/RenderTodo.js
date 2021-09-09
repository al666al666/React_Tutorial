import React from 'react';
import { ACTIONS } from './Todo';
export default function RenderTodo({ todo, dispatch }) {
    return (
        <>
            <span style={{ color: todo.complete ? "#000" : "#776ef3" }}>{todo.name} </span>
            <button
                onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
                Toggle
            </button>
            <button
                onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
                Delete
            </button>
            <br></br>
        </>
    )
}