import React, { useEffect, useState } from 'react';
import Todo from './component/todos/Todo';

const App = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  return (

    <div>
      <h1>Fake Api</h1>
      {
        todos.map(todo => <Todo todo={todo}></Todo>)
      }

    </div>
  )
};


export default App;