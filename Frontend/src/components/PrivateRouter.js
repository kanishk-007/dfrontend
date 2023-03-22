import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRouter() {

  const token = useSelector((state) => state.accessToken)
  return (
    token ? <Outlet /> : <Navigate to="/login" />
  )
}
