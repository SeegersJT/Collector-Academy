import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// project import
import AuthFooter from '_old/components/cards/AuthFooter';
import Logo from '_old/components/logo';

// assets
import AuthBackground from '_old/assets/images/auth/AuthBackground';
import AuthCard from '_old/pages/authentication/AuthCard';

function AuthWrapper({ children }) {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
          >
            <Grid item>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };

export default AuthWrapper;
