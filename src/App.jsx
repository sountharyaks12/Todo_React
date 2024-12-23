
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
        <div style={{overflow:'scroll', display: 'flex',justifyContent:'center',alignItems:'center', backgroundColor: '#313547',color:'white', height: '90vh' }}>
            <div style={{maxHeight:'140px',marginBottom:'30px',padding:'10px'}} >
                <div style={{border:'2px solid white',borderRadius:'10px',padding:'10px 20px'}}>   <h1>Todo App {state.length}</h1>
                    <label htmlFor="task">Enter Todo</label><br></br><br />
                    <input
                        type="text"
                        id='task'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleChange}
                        placeholder='Enter todo'
                         
                    />

                    <button onClick={addTodo}>Add</button>
                    <ol >
                        {state.map(todo => (
                            <li key={todo.id}>{todo.name}</li>
                        ))}
                    </ol>
                </div> 
                </div>
        </div>
    );
}