import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Pricing from './components/Pricing/Pricing'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <h1 className='text-6xl text-center font-bold mt-20 text-orange-400'>Welcome to My WebSite</h1>
      
     <Pricing></Pricing>
     <Dashboard></Dashboard>
     <PhoneBar></PhoneBar>

    </div>
  )
}

export default App
