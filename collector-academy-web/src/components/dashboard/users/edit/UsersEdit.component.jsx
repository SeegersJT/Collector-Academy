import { Grid, Stack, TextField, Typography } from '@mui/material';
import DefaultBox from 'components/box/DefaultBox.component';
import CardList from 'components/card/list/CardList.component';
import MainCardComponent from 'components/card/MainCard.component';

function UsersEdit({ title, isMultipleUsers, singleUser, actionListData }) {
  console.log('singleUser', singleUser);
  return (
    <DefaultBox>
      {/* Row 1 */}
      <Grid item xs={12} lg={8}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 2 } }}>
          <Typography variant="h5">{title}</Typography>
        </Stack>
        <MainCardComponent sx={{ mt: 2 }} content={true}>
          <form noValidate>
            <Grid item lg={12}>
              <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                <TextField
                  sx={{ flex: 1 }}
                  id="user-edit-branch"
                  label="Branch"
                  variant="outlined"
                  autoFocus
                  value={isMultipleUsers ? 'Multiple Users Selected' : singleUser.branchName}
                  onChange={() => {}}
                />
                <TextField
                  sx={{ flex: 1 }}
                  id="user-edit-name"
                  label="Name"
                  variant="outlined"
                  disabled={isMultipleUsers}
                  value={isMultipleUsers ? 'Multiple Users Selected' : singleUser.name}
                  onChange={() => {}}
                />
              </Stack>
            </Grid>
            <Grid item lg={12}>
              <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                <TextField
                  sx={{ flex: 1 }}
                  id="user-edit-surname"
                  label="Surname"
                  variant="outlined"
                  disabled={isMultipleUsers}
                  value={isMultipleUsers ? 'Multiple Users Selected' : singleUser.surname}
                  onChange={() => {}}
                />
                <TextField
                  sx={{ flex: 1 }}
                  id="users-edit-idnumber"
                  label="ID Number"
                  variant="outlined"
                  disabled={isMultipleUsers}
                  value={isMultipleUsers ? 'Multiple Users Selected' : singleUser.idNumber}
                  onChange={() => {}}
                />
              </Stack>
            </Grid>
            <Grid item lg={12}>
              <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                <TextField
                  sx={{ flex: 1 }}
                  id="user-edit-emailaddress"
                  label="Email Address"
                  variant="outlined"
                  disabled={isMultipleUsers}
                  value={isMultipleUsers ? 'Multiple Users Selected' : singleUser.emailAddress}
                  onChange={() => {}}
                />
                <TextField
                  sx={{ flex: 1 }}
                  id="user-edit-mobilenumber"
                  label="Mobile Number"
                  variant="outlined"
                  disabled={isMultipleUsers}
                  value={isMultipleUsers ? 'Multiple Users Selected' : singleUser.mobileNumber}
                  onChange={() => {}}
                />
              </Stack>
            </Grid>
            <Grid item lg={12}>
              <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                <TextField
                  sx={{ flex: 1 }}
                  id="user-edit-gender"
                  label="Gender"
                  variant="outlined"
                  disabled={isMultipleUsers}
                  value={isMultipleUsers ? 'Multiple Users Selected' : singleUser.gender}
                  onChange={() => {}}
                />
                <TextField
                  sx={{ flex: 1 }}
                  id="user-edit-employeetype"
                  label="Employee Type"
                  variant="outlined"
                  disabled={isMultipleUsers}
                  value={isMultipleUsers ? 'Multiple Users Selected' : singleUser.employeeType}
                  onChange={() => {}}
                />
              </Stack>
            </Grid>
            <Grid container item lg={6}>
              <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2, mr: 1 }}>
                <TextField
                  sx={{ flex: 1 }}
                  id="user-edit-performancemanager"
                  label="Performance Manager"
                  variant="outlined"
                  disabled={isMultipleUsers}
                  value={isMultipleUsers ? 'Multiple Users Selected' : singleUser.performanceManagerUsername}
                  onChange={() => {}}
                />
              </Stack>
            </Grid>
          </form>
        </MainCardComponent>
      </Grid>
      <Grid item xs={12} lg={4}>
        <CardList title="User Actions" data={actionListData} scrollable height="400px" />
      </Grid>
    </DefaultBox>
  );
}

UsersEdit.propTypes = {};

export default UsersEdit;
