import './App.css'
import { Routes, Route } from "react-router-dom"
import { useSelector } from 'react-redux';

import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'
import Home from '../Pages/Home'
import User from '../Pages/User'
import Role from '../Pages/Role'
import Post from '../Pages/Post'

function App() {
  const auth = useSelector(state => state.auth);
  return (
    <>
      {auth === true || localStorage.getItem("data") ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Home />} />
          <Route path='/post' element={<Post />} />
          <Route path='/user' element={<User />} />
          <Route path='/role' element={<Role />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      )}
    </>
  )
}

export default App
