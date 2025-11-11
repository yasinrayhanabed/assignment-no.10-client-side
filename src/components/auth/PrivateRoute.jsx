import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (user) {
    return children
  }

  return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoute