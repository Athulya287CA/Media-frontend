
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './Components/Header'

import LandingPage from './Pages/LandingPage'
import WatchHistory from './Pages/WatchHistory'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>
    </>
  )
}

export default App
