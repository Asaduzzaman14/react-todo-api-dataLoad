import React from 'react';

const Todo = (props) => {
    console.log(props.todo);
    return (
        <div>
            <h2>{props.todo.id}</h2>
            <h3>userId: {props.userId}</h3>
            <p>title:{props.todo.title}</p>
        </div>
    );
};

export default Todo;




