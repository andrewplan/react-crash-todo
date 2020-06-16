import React, { useState } from 'react';

const initialTodos = [
    {
        id: 1,
        title: 'Eat chicken',
        isComplete: false
    },
    {
        id: 2,
        title: 'Fish for tilapia',
        isComplete: false
    },
    {
        id: 3,
        title: 'Find a oatmeal pie',
        isComplete: false
    }
];

const toggleComplete = (id, todos) => {
    console.log(id, todos)
    const result = todos.map(t => {
        if (t.id === id) t.isComplete = !t.isComplete;
        return t;
    })
    return result;
}

const markComplete = (isComplete) => {
    console.log('Running markComplete...');
    return isComplete ? 'line-through' : 'none';
}

function Todos(props) {
    const [todos, setTodos] = useState(initialTodos);
    console.log( todos )
    return (
        <div className="App">
            <h1>Todos</h1>
            { todos.map( t => {
                const { id } = t;
                return (
                <p 
                    key={ id } 
                    onClick={ () => setTodos( toggleComplete( id, todos ) ) }
                    style={{ textDecoration: markComplete( t.isComplete ) }}
                >
                    { t.title }
                </p>
                )
            } ) }
        </div>
    );
}

export default Todos;
