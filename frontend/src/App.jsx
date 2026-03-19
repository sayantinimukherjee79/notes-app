import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import AddNote from './pages/AddNote'
import EditNote from './pages/EditNote'
import Dashboard from './pages/Dashboard'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/add' element={<AddNote/>}/>
          <Route path='/edit/:id' element={<EditNote/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App