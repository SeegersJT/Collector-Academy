import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

function AuthenticatedRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
}

export default AuthenticatedRoute;
