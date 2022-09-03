import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { useEffect } from 'react'


function App() {

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Products/>
      <Footer></Footer>
    </div>
  )
}

export default App
