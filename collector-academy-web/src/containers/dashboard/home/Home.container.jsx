import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ComparisonStatistics from 'components/card/statistic/ComparisonStatistic.component';
import AreaChart from 'components/charts/AreaChart.component';
import MiniBarChart from 'components/charts/MiniBarChart.component';
import MainCardComponent from 'components/card/MainCard.component';
import DataTable from 'components/tables/DataTable.component';
import { formatCourseActivityData, getCourseActivityData, getHeaderData, getUserActivityData } from './Home.helper';

function HomeContainer() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ p: { xs: 2, sm: 3 }, display: 'flex', flexDirection: 'column' }}>
        {/* row 1 */}
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          <Grid item xs={12} sx={{ mb: -2.25 }}>
            <Typography variant="h5">Home</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ComparisonStatistics color="success" title="Total Courses Passed" count="4,42,236" percentage={59.3} extra="35,000" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ComparisonStatistics color="error" title="Total Courses Failed" count="4,42,236" percentage={59.3} isLoss extra="35,000" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ComparisonStatistics color="success" title="Total Website Activity" count="4,42,236" percentage={59.3} extra="35,000" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ComparisonStatistics color="error" title="Total User Experience" count="4,42,236" percentage={59.3} isLoss extra="35,000" />
          </Grid>

          <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

          {/* row 2 */}
          <Grid item xs={12} md={7} lg={8}>
            <AreaChart title="Course Activity" filters={getCourseActivityData(theme)} />
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <MiniBarChart title="User Activity" description="Currently Active Users" extra="30" filters={getUserActivityData(theme)} />
          </Grid>

          {/* row 3 */}
          <Grid item xs={12} md={7} lg={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Recent Orders</Typography>
              </Grid>
              <Grid item />
            </Grid>
            <MainCardComponent sx={{ mt: 2 }} content={false}>
              <DataTable headerData={getHeaderData} data={formatCourseActivityData()} />
            </MainCardComponent>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

HomeContainer.propTypes = {};

export default HomeContainer;
