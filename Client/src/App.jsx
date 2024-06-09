// import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.main.css'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import {BrowserRouter, Routes , Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
