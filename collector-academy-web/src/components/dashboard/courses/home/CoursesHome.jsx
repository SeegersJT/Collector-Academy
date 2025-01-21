import { Grid, Typography } from '@mui/material';
import DefaultBox from 'components/box/DefaultBox.component';
import CardList from 'components/card/list/CardList.component';
import ComparisonStatistics from 'components/card/statistic/ComparisonStatistic.component';
import DataTable from 'components/tables/DataTable.component';
import { formatCoursesData, getColumnModifiers, getHeaderModifiers } from 'containers/dashboard/courses/home/CoursesHome.helper';
import PropTypes from 'prop-types';

function CoursesHome({ theme, coursesData, coursesDataLoading, coursesActionsListData, coursesToolbarData, onToolbarClick }) {
  return (
    <DefaultBox>
      {/* Row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Courses Activity</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ComparisonStatistics color="success" title="Total Current Active Courses" count="1" percentage={100} extra="1" />
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

      {/* Row 2 */}
      <Grid item xs={12} md={5} lg={4}>
        <CardList title="Actions" data={coursesActionsListData} scrollable height="200px" />
      </Grid>

      {/* Row 3 */}
      <Grid item xs={12} md={7} lg={12}>
        <DataTable
          title="Courses"
          headerModifiers={getHeaderModifiers(theme)}
          columnModifiers={getColumnModifiers(theme)}
          data={coursesData}
          dataLoading={coursesDataLoading}
          toolbarData={coursesToolbarData}
          rows={10}
          selectable
          searchable
          singleSelect
          onFormatCellData={formatCoursesData}
          onToolbarClick={onToolbarClick}
        />
      </Grid>
    </DefaultBox>
  );
}

CoursesHome.propTypes = {
  theme: PropTypes.object.isRequired,
  coursesData: PropTypes.arrayOf(PropTypes.object).isRequired,
  coursesDataLoading: PropTypes.bool.isRequired,
  coursesActionsListData: PropTypes.arrayOf(PropTypes.object).isRequired,
  coursesToolbarData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToolbarClick: PropTypes.func.isRequired
};

export default CoursesHome;
