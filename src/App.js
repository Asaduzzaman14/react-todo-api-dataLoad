import React, { useEffect, useState } from 'react';
import Todo from './component/todos/Todo';

const App = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])



  // {
  //   todos.map(todo => console.log(todo))
  // }


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
  // return (
  //       <div>
  //           <Header></Header>
  //           <h2 className='heading'>Total Countries:{countries.length}</h2>
  //           <div className='country-container'>{countries.map(country =>

  //               <Country country={country}
  //                   key={country.cca3}
  //               ></Country>
  //           )}</div>
  //           <Footer></Footer>
  //       </div>
  //   );