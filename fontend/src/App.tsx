import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRoutes } from 'react-router-dom'
import Header from './components/client/Header'

function App() {
  const element = useRoutes([
    {
      path: "",
      element: <Header/>
    }
  ]);
  return <main>{element}</main>;
}

export default App
