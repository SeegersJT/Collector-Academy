import AuthenticatedRoute from 'middleware/AuthenticatedRoute.container';
import LoginContainer from 'containers/auth/login/Login.container';
import PasswordForgotContainer from 'containers/auth/passwordForgot/PasswordForgot.container';
import DashboardContainer from 'containers/dashboard/dashboard.container';
import HomeDashboardContainer from 'containers/dashboard/home/HomeDashboard.container';
import UsersAddContainer from 'containers/dashboard/users/add/UsersAdd.container';
import UsersEditContainer from 'containers/dashboard/users/edit/UsersEdit.container';
import UsersHomeContainer from 'containers/dashboard/users/home/UsersHome.container';
import UsersDashboardContainer from 'containers/dashboard/users/UsersDashboard.container';
import GlobalContainer from 'containers/global/global.container';
import OneTimePinContainer from 'containers/token/oneTimePin/OneTimePin.container';
import PasswordResetContainer from 'containers/token/passwordReset/PasswordReset.container';
import TokenContainer from 'containers/token/Token.container';
import { useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RouteNotFound from 'middleware/RouteNotFound.container';
import UsersAddStatusContainer from 'containers/dashboard/users/add/status/UsersAddStatus.container';
import CoursesDashboardContainer from 'containers/dashboard/courses/CoursesDashboard.container';
import CoursesHomeContainer from 'containers/dashboard/courses/home/CoursesHome.container';
import CourseEditorContainer from 'containers/dashboard/courses/course-editor/CourseEditor.container';
import ModuleEditorContainer from 'containers/dashboard/courses/module-editor/ModuleEditor.container';

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
              <Route path="home" element={<HomeDashboardContainer />} />

              {/* ====[ USERS - DASHBOARD ]==== */}
              {roleNo <= 4 && (
                <Route path="users" element={<UsersDashboardContainer />}>
                  <Route index element={<Navigate to="/dashboard/users/home" replace />} />
                  <Route path="home" element={<UsersHomeContainer />} />

                  <Route path="add/status" element={<UsersAddStatusContainer />} />
                  <Route path="add" element={<UsersAddContainer />} />
                  <Route path="edit" element={<UsersEditContainer />} />

                  {/* ====[ REROUTE - TO - USERS HOME ]==== */}
                  <Route path="*" element={<RouteNotFound destination="/dashboard/users" />} />
                </Route>
              )}

              {/* ====[ COURSES - DASHBOARD ]==== */}
              {roleNo <= 4 && (
                <Route path="courses" element={<CoursesDashboardContainer />}>
                  <Route index element={<Navigate to="/dashboard/courses/home" replace />} />
                  <Route path="home" element={<CoursesHomeContainer />} />

                  <Route path="course-editor" element={<CourseEditorContainer />} />
                  <Route path="module-editor" element={<ModuleEditorContainer />} />

                  {/* ====[ REROUTE - TO - COURSES HOME ]==== */}
                  <Route path="*" element={<RouteNotFound destination="/dashboard/courses" />} />
                </Route>
              )}

              <Route path="reporting" element={<HomeDashboardContainer />} />
              <Route path="settings" element={<HomeDashboardContainer />} />

              {/* ====[ REROUTE - TO - DAHSBOARD HOME ]==== */}
              <Route path="*" element={<RouteNotFound destination="/dashboard" />} />
            </Route>
          </Route>

          {/* ===========================================[ AUTHENTICATED ]=========================================== */}

          {/* ====[ REROUTE - TO - ROOT ]==== */}
          <Route path="*" element={<RouteNotFound destination="/" />} />
        </Routes>
      </GlobalContainer>
    </Router>
  );
}
