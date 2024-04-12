import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SquadMemberList from './components/SquadMembersList'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>
      <Header />
      <main>
        <SquadMemberList />
      </main>
      <Footer />
    </div>
  )
}

export default App
