import { Box } from '@mui/material';
import PropTypes from 'prop-types';

function Navigation({ navigationGroups }) {
  return <Box sx={{ pt: 2 }}>{navigationGroups}</Box>;
}

Navigation.propTypes = {
  navigationGroups: PropTypes.func
};

export default Navigation;
