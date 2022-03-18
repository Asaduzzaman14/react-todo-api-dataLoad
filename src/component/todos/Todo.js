import React from 'react';

const Todo = (props) => {

    return (
        <div style={todo}>
            <h2>{props.todo.id}</h2>
            <h3>userId: {props.userId}</h3>
            <p>title:{props.todo.title}</p>
        </div>
    );
};
const todo = {
    textAlign: 'center',
    border: '2px solid orange',
    margin: '20px',
    background: 'skyblue',
    padding: '10px',
    borderRadius: '10px'
}

export default Todo;
