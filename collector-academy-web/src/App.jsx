import LoginContainer from 'containers/auth/login/Login.container';
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
            <Route path="/token/one-time-pin" element={<OneTimePinContainer />} />
          </Route>
          {/* <Route path="/auth/one-time-pin" element={<OneTimePinContainer />} /> */}
          {/* <Route path="/auth/password-forgot" element={<PasswordForgotContainer />} /> */}
          {/* <Route path="/auth/password-reset" element={<PasswordResetContainer />} /> */}

          {/* Main Application Routes */}
          {/* <Route path="/dashboard" element={<DashboardContainer />} /> */}

          {/* Catch-all route for 404 */}
          {/* <Route path="/not-found" element={<NotFoundContainer />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </GlobalContainer>
    </Router>
  );
}
