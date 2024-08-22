import React from 'react'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup'
function App() {
const login = false
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Signup/>}></Route>
        </Routes>  
      </Router>
      
    </>
  )
}

export default App
