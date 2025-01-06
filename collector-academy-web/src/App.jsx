import AuthenticatedRoute from 'containers/auth/AuthenticatedRoute,container';
import LoginContainer from 'containers/auth/login/Login.container';
import PasswordForgotContainer from 'containers/auth/passwordForgot/PasswordForgot.container';
import DashboardContainer from 'containers/dashboard/dashboard.container';
import HomeDashboardContainer from 'containers/dashboard/home/HomeDashboard.container';
import UsersEditContainer from 'containers/dashboard/users/edit/UsersEdit.container';
import UsersHomeContainer from 'containers/dashboard/users/home/UsersHome.container';
import UsersDashboardContainer from 'containers/dashboard/users/UsersDashboard.container';
import GlobalContainer from 'containers/global/global.container';
import OneTimePinContainer from 'containers/token/oneTimePin/OneTimePin.container';
import PasswordResetContainer from 'containers/token/passwordReset/PasswordReset.container';
import TokenContainer from 'containers/token/Token.container';
import { useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  const { roleNo } = useSelector((state) => state.user);
  return (
    <Router>
      <GlobalContainer>
        <Routes>
          {/* ===========================================[ UNAUTHENTICATED ROUTES ]=========================================== */}

          {/* ====[ REROUTE - TO - LOGIN ]==== */}
          <Route path="/" element={<Navigate to="/auth/login" replace />} />

          <Route path="/auth/login" element={<LoginContainer />} />
          <Route path="/auth/password-forgot" element={<PasswordForgotContainer />} />

          <Route path="/token" element={<TokenContainer />}>
            <Route path="one-time-pin" element={<OneTimePinContainer />} />
            <Route path="password-reset" element={<PasswordResetContainer />} />
          </Route>

          {/* ===========================================[ UNAUTHENTICATED ROUTES ]=========================================== */}

          {/* ===========================================[ AUTHENTICATED ROUTES ]=========================================== */}

          <Route element={<AuthenticatedRoute />}>
            {/* ====[ DASHBOARD ]==== */}
            <Route path="/dashboard" element={<DashboardContainer />}>
              <Route index element={<Navigate to="/dashboard/home" replace />} />

              {/* ====[ HOME - DASHBOARD ]==== */}
              <Route path="home" element={<HomeDashboardContainer />} />

              {/* ====[ USER - DASHBOARD ]==== */}
              {roleNo <= 4 && (
                <Route path="users" element={<UsersDashboardContainer />}>
                  {/* ====[ HOME - USER - DASHBOARD ]==== */}
                  <Route index element={<Navigate to="/dashboard/users/home" replace />} />
                  <Route path="home" element={<UsersHomeContainer />} />

                  {/* ====[ USERS - ADD ]==== */}
                  {/* <Route path="add" element={<UsersAddContainer />} /> */}

                  {/* ====[ USERS - EDIT ]==== */}
                  <Route path="edit" element={<UsersEditContainer />} />

                  {/* ====[ REROUTE - TO - USERS HOME ]==== */}
                  <Route path="*" element={<Navigate to="/dashboard/users/home" replace />} />
                </Route>
              )}

              <Route path="course" element={<HomeDashboardContainer />} />
              <Route path="reporting" element={<HomeDashboardContainer />} />
              <Route path="settings" element={<HomeDashboardContainer />} />

              {/* ====[ REROUTE - TO - DAHSBOARD HOME ]==== */}
              <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
            </Route>
          </Route>

          {/* ===========================================[ AUTHENTICATED ]=========================================== */}

          {/* ====[ REROUTE - TO - ROOT ]==== */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </GlobalContainer>
    </Router>
  );
}
