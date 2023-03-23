import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/action'
import isauth from '../utils/isauth'

export default function Navigator() {
  const token = useSelector((state) => state.accessToken)
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout())
  }
  return (
    <>
      <nav className='navbar'>
        {token && <NavLink to="/">Home</NavLink>}
        {token && <NavLink to="/about">About</NavLink>}
        {token && <NavLink to="/post">Post</NavLink>}
        {token && isauth() ? <NavLink to="/logout" onClick={handleLogout}>
          Logout
        </NavLink> :
          <NavLink to="/login" >Login</NavLink>}
        {!token && <NavLink to="/signup"> SignUp</NavLink>}
      </nav>

    </>
  )
}

