
import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "addTodo":
            console.log("add todo");
            return [
                ...state, { id: Date.now(), name: action.todo } 
            ];
        default:
            return state;
    }
};

let initialState = [];

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        if (e.key === "Enter") {
            if (inputValue.trim()) { 
                dispatch({ type: "addTodo", todo: inputValue });
                setInputValue(''); 
            }
        }
    };

    const addTodo = () => {
        if (inputValue.trim()) { 
            dispatch({ type: "addTodo", todo: inputValue }); // Changed payload to todo
            setInputValue('');
        }
    };

    return (
        <>
            <h1>Todo App ({state.length})</h1>
            <label htmlFor="task">Enter Todo</label>
            <input
                type="text"
                id='task'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={handleChange}
                placeholder='Enter todo'
                style={{ width: '200px' }} // Increased width for better usability
            />
        
            <button onClick={addTodo}>Add</button>
            <ul>
                {state.map(todo => (
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>
        </>
    );
}