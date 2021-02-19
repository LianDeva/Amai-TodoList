import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from "./TodoForm"

function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {
        const newTodos = [...todos, todo];
        
        setTodos(newTodos)
    };

    const removeTodo = id => {
        const remoteArr = [...todos].filter(todo => todo.id !== id)

        setTodos(remoteArr);
    }

    const completeTodo = id => {
        let updatedTodos= todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todos.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }
    return (
        <div>
            <h1>Chore's List </h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/> 
        </div>
    )
}

export default TodoList
