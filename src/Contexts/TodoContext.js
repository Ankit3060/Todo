import {useContext, createContext, useState} from 'react';

export const TodoContext = createContext({
    todos : [],
    addTodo : () => {},
    deleteTodo : () => {},
    editTodo : () => {},
    completeTodo : () => {}
})

export const TodoProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext);
}