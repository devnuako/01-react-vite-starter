// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import TodoData from "./components/todo/TodoData";
// import TodoNew from './components/todo/TodoNew';
// import './components/todo/todo.css';
// import reactLogo from './assets/react.svg';
// import { useState } from "react";

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';


//component = html + css + js

// function App() {
const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
