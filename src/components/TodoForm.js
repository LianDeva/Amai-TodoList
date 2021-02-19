import React, {useState} from 'react'

// The main form and all the event handlers for it.

function TodoForm(props) {
    const [input, setInput] = useState('');

    // the code that collects the typing of the user in the Todo bar.

    const handleChange = e => {
        setInput(e.target.value);
    };

    // the code that interacts with the button

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
        
    // the form itself and all of its components 
    
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add a chore" 
            value={input} 
            name="text"
            className="todo-input"
            onChange={handleChange} />
            <button className="todo-button">Add chore</button>
        </form>
    )
}

export default TodoForm
