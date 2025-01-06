import { Grid, Typography } from '@mui/material';
import DefaultBox from 'components/box/DefaultBox.component';
import CardList from 'components/card/list/CardList.component';
import ComparisonStatistics from 'components/card/statistic/ComparisonStatistic.component';
import DataTable from 'components/tables/DataTable.component';
import { formatUsersData, getColumnModifiers, getHeaderModifiers, getToolbarData } from 'containers/dashboard/users/UsersDashboard.helper';
import PropTypes from 'prop-types';

function UsersDashboard({ theme, usersData, usersDataLoading, actionsListData, onToolbarClick }) {
  return (
    <DefaultBox>
      {/* Row 1 */}
      <Grid item xs={12} md={5} lg={4}>
        <CardList title="Actions" data={actionsListData} scrollable height="200px" />
      </Grid>

      {/* Row 2 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Users Activity</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ComparisonStatistics color="success" title="Total Current Active Users" count="487" percentage={2} extra="10" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ComparisonStatistics color="success" title="Total SMS's Sent to Users" count="6847" percentage={20} extra="514" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ComparisonStatistics color="success" title="Total Passwords Resets" count="4524157" percentage={2} isLoss extra="1" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ComparisonStatistics color="error" title="Total Typing Test Success" count="0" percentage={100} isLoss extra="0" />
      </Grid>

      {/* Row 3 */}
      <Grid item xs={12} md={7} lg={12}>
        <DataTable
          title="Users"
          headerModifiers={getHeaderModifiers(theme)}
          columnModifiers={getColumnModifiers(theme)}
          data={usersData}
          dataLoading={usersDataLoading}
          toolbarData={getToolbarData(onToolbarClick)}
          rows={10}
          selectable
          searchable
          onFormatCellData={formatUsersData}
          onToolbarClick={onToolbarClick}
        />
      </Grid>
    </DefaultBox>
  );
}

UsersDashboard.propTypes = {
  theme: PropTypes.object.isRequired,
  usersData: PropTypes.arrayOf(PropTypes.object).isRequired,
  usersDataLoading: PropTypes.bool,
  actionsListData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToolbarClick: PropTypes.func
};

export default UsersDashboard;
