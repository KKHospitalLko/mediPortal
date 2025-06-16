import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { role } = useAuth();

  if (role === allowedRole) {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
