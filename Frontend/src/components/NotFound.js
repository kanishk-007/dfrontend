import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className='pagenotfound'>
      <img src='error404.jpg' style={{ height: "70vh", width: "60%" }} alt="Error 404"></img>
      <Button variant="contained" onClick={() => navigate("/")} style={{ display: 'block' }}>Go Back</Button>
    </div>
  )
}
