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

import { getAccountAPI } from './services/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.context';


//component = html + css + js

// function App() {
const App = () => {

  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, [])

  const delay = (milSeconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, milSeconds)
    })
  }

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    await delay(3000)
    if (res.data) {
      //success
      setUser(res.data.user)
      console.log(">>> check user data: ", res.data)
    }
  }


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
