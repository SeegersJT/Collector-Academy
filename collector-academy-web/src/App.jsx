import AuthenticatedRoute from 'containers/auth/AuthenticatedRoute,container';
import LoginContainer from 'containers/auth/login/Login.container';
import PasswordForgotContainer from 'containers/auth/passwordForgot/PasswordForgot.container';
import DashboardContainer from 'containers/dashboard/dashboard.container';
import HomeDashboardContainer from 'containers/dashboard/home/HomeDashboard.container';
import HomeContainer from 'containers/dashboard/home/HomeDashboard.container';
import UsersDashboardContainer from 'containers/dashboard/users/UsersDashboard.container';
import GlobalContainer from 'containers/global/global.container';
import OneTimePinContainer from 'containers/token/oneTimePin/OneTimePin.container';
import PasswordResetContainer from 'containers/token/passwordReset/PasswordReset.container';
import TokenContainer from 'containers/token/Token.container';
import UserContainer from 'containers/user/User.container';
import { useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  const { roleNo } = useSelector((state) => state.user);
  return (
    <Router>
      <GlobalContainer>
        <Routes>
          {/* Redirect from root path ("/") to /auth/login */}
          <Route path="/" element={<Navigate to="/auth/login" replace />} />

          {/* Auth Routes */}
          <Route path="/auth/login" element={<LoginContainer />} />
          <Route path="/auth/password-forgot" element={<PasswordForgotContainer />} />

          <Route path="/token" element={<TokenContainer />}>
            <Route path="one-time-pin" element={<OneTimePinContainer />} />
            <Route path="password-reset" element={<PasswordResetContainer />} />
          </Route>

          {/* ===========================================[ AUTHENTICATED ]=========================================== */}
          <Route element={<AuthenticatedRoute />}>
            <Route path="/dashboard" element={<DashboardContainer />}>
              <Route index element={<Navigate to="/dashboard/home" replace />} />

              <Route path="home" element={<HomeDashboardContainer />} />
              {roleNo <= 4 && <Route path="users" element={<UsersDashboardContainer />} />}
              <Route path="course" element={<HomeContainer />} />
              <Route path="reporting" element={<HomeContainer />} />
              <Route path="settings" element={<HomeContainer />} />

              <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
            </Route>

            <Route path="/profile" element={<ProfileContainer />}>
              <Route index element={<Navigate to="/profile" replace />} />

              {/* <Route path="profile" element={<UserProfileContainer />} /> */}
              <Route path="" element={<ProfileEditContainer />} />
              {/* <Route path="add" element={<ProfileAddContainer />} /> */}
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
