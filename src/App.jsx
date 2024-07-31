// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import TodoData from "./components/todo/TodoData";
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';


//component = html + css + js

// function App() {
const App = () => {
  const myname = "Arsenal from parent";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />

        <TodoData
          name={myname}
          age={age}
          data={data}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
