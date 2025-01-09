import { Button, Grid } from '@mui/material';
import DefaultBox from 'components/box/DefaultBox.component';
import DataTable from 'components/tables/DataTable.component';
import { formatUsersData, getColumnModifiers, getHeaderModifiers } from 'containers/dashboard/users/add/UsersAdd.helper';

function UsersAdd({ theme, usersData, validityUsersData, validityReasonUsersData, usersDataLoading }) {
  return (
    <DefaultBox>
      {/* Row 1 */}
      <Grid item xs={12} md={7} lg={12}>
        <DataTable
          title="Add Users"
          headerModifiers={getHeaderModifiers(theme)}
          columnModifiers={getColumnModifiers(theme)}
          data={usersData}
          dataLoading={usersDataLoading}
          //   toolbarData={getToolbarData()}
          rows={10}
          //   selectable
          searchable
          onFormatCellData={(data) => formatUsersData(data, validityUsersData, validityReasonUsersData)}
          //   onToolbarClick={() => {}}
        />
      </Grid>

      <Button
        sx={{ m: 2, width: '250px' }}
        disableElevation
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="primary"
        //   disabled={!isValidUserStatus}
      >
        {/* {updateUsersLoading ? <CircularProgress size={26} color="inherit" /> : isValidUserStatus ? 'Save' : 'No Changes Made'} */}
        Add Users
      </Button>
    </DefaultBox>
  );
}

UsersAdd.propTypes = {};

export default UsersAdd;
