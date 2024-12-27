import { Grid } from '@mui/material';
import ComparisonStatistics from 'components/card/statistic/ComparisonStatistic.component';

function HomeContainer() {
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ComparisonStatistics color="success" title="Total Page Views" count="4,42,236" percentage={59.3} isLoss extra="35,000" />
        </Grid>
      </Grid>
    </>
  );
}

HomeContainer.propTypes = {};

export default HomeContainer;
