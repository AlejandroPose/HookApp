import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {

    const initialState = [];

    const init = () => {
        return JSON.parse( localStorage.getItem('todos') ) || [];
    };

    const [todos , dispatch] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem( 'todos', JSON.stringify(todos) );
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'ADD',
            payload: todo,
        }
        dispatch( action );
    };

    const handleRemoveTodo = ( todo ) => {
        const action = {
            type: 'REMOVE',
            payload: todo,
        }
        dispatch( action );
    };

    const handleToggleTodo = ( todo ) => {
        const action = {
            type: 'MARK',
            payload: todo,
        }
        dispatch( action );
    };

  return {
    todos,
    allTodos: todos.length,
    pendingTodos: todos.filter( todo => !todo.done ).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };

};

export default useTodo;