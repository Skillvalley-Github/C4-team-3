import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../api/store'
import { useEffect } from 'react'

function Protected ({ children }) {
  const { isAuthenticated } = useAuthStore()
  if(!isAuthenticated()) return <Navigate to='/auth' />
  return children
}

export default Protected
