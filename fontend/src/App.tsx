import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRoutes } from 'react-router-dom'

function App() {
  const element = useRoutes([

  ]);
  return <main>{element}</main>;
}

export default App
