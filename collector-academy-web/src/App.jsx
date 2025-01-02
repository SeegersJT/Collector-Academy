import AuthenticatedRoute from 'containers/auth/AuthenticatedRoute,container';
import LoginContainer from 'containers/auth/login/Login.container';
import DashboardContainer from 'containers/dashboard/dashboard.container';
import HomeContainer from 'containers/dashboard/home/Home.container';
import UsersContainer from 'containers/dashboard/users/Users.container';
import GlobalContainer from 'containers/global/global.container';
import OneTimePinContainer from 'containers/token/oneTimePin/OneTimePin.container';
import TokenContainer from 'containers/token/Token.container';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  return (
    <Router>
      <GlobalContainer>
        <Routes>
          {/* Redirect from root path ("/") to /auth/login */}
          <Route path="/" element={<Navigate to="/auth/login" replace />} />

          {/* Auth Routes */}
          <Route path="/auth/login" element={<LoginContainer />} />

          <Route path="/token" element={<TokenContainer />}>
            <Route path="one-time-pin" element={<OneTimePinContainer />} />
            {/* <Route path="/auth/password-forgot" element={<PasswordForgotContainer />} /> */}
            {/* <Route path="/auth/password-reset" element={<PasswordResetContainer />} /> */}
          </Route>

          {/* ===========================================[ AUTHENTICATED ]=========================================== */}
          <Route element={<AuthenticatedRoute />}>
            <Route path="/dashboard" element={<DashboardContainer />}>
              <Route index element={<Navigate to="/dashboard/home" replace />} />

              <Route path="home" element={<HomeContainer />} />
              <Route path="users" element={<UsersContainer />} />
              <Route path="course" element={<HomeContainer />} />
              <Route path="reporting" element={<HomeContainer />} />
              <Route path="settings" element={<HomeContainer />} />

              <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
            </Route>
          </Route>
          {/* ===========================================[ AUTHENTICATED ]=========================================== */}

          {/* Catch-all route for 404 */}
          {/* <Route path="/not-found" element={<NotFoundContainer />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </GlobalContainer>
    </Router>
  );
}
