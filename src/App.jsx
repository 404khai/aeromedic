import { useState } from 'react'
import './App.css'
import AppRouter from './AppRouter'
// import Card from './components/Card/Card'

function App() {

  return (
    <>
      <div className='app'>
        {/* <Card></Card> */}
        <AppRouter></AppRouter>
      </div>
    </>
  )
}

export default App
