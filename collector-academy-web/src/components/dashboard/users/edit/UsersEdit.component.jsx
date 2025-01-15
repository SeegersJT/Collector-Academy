import { Button, CircularProgress, Grid, Stack, TextField, Typography } from '@mui/material';
import DefaultBox from 'components/box/DefaultBox.component';
import CardList from 'components/card/list/CardList.component';
import MainCardComponent from 'components/card/MainCard.component';
import PopUp from 'components/popup/PopUp.component';
import SelectLabel from 'components/selectLabel/SelectLabel.component';
import { Utils } from 'utils/Utils';

function UsersEdit({
  theme,
  title,
  isSingleUser,
  selectedUser,
  isValidUser,
  isValidUserStatus,
  actionListData,
  branchMenuItems,
  employeeTypeMenuItems,
  genderMenuItems,
  performanceManagerMenuItems,
  resetPasswordModalRef,
  deleteUsersModalRef,
  updateUsersLoading,
  usersResetPasswordLoading,
  deleteUsersLoading,
  onSelectedUserChange,
  onUsersEditSumbit,
  onResetPasswordPopUpClick,
  onDeleteUsersPopUpClick
}) {
  return (
    <>
      <DefaultBox>
        {/* Row 1 */}
        <Grid item xs={12} lg={4}>
          <CardList title="User Actions" data={actionListData} scrollable height="400px" />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 2 } }}>
            <Typography variant="h5">{title}</Typography>
          </Stack>
          <form noValidate onSubmit={onUsersEditSumbit}>
            <MainCardComponent sx={{ mt: 2 }} content={true}>
              <Grid item lg={12}>
                <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                  <SelectLabel
                    title="Branch"
                    type={isValidUser?.branchNo}
                    menuItems={branchMenuItems}
                    selectedItems={[selectedUser?.branchNo]}
                    onSelectedMenuItemsChange={(branchNo) => onSelectedUserChange(branchNo, 'branchNo')}
                  />
                  <TextField
                    sx={Utils.textFieldStyle(theme, isValidUser?.idNumber)}
                    required={isValidUser?.idNumber !== 1}
                    id="users-edit-idnumber"
                    label="ID Number"
                    variant="outlined"
                    disabled={!isSingleUser}
                    value={isSingleUser ? selectedUser?.idNumber : 'Multiple Users Selected'}
                    onChange={(event) => onSelectedUserChange(event.target.value, 'idNumber')}
                  />
                </Stack>
              </Grid>
              <Grid item lg={12}>
                <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                  <TextField
                    sx={Utils.textFieldStyle(theme, isValidUser?.name)}
                    required={isValidUser?.name !== 1}
                    id="user-edit-name"
                    label="Name"
                    variant="outlined"
                    disabled={!isSingleUser}
                    value={isSingleUser ? selectedUser?.name : 'Multiple Users Selected'}
                    onChange={(event) => onSelectedUserChange(event.target.value, 'name')}
                  />
                  <TextField
                    sx={Utils.textFieldStyle(theme, isValidUser?.surname)}
                    required={isValidUser?.surname !== 1}
                    id="user-edit-surname"
                    label="Surname"
                    variant="outlined"
                    disabled={!isSingleUser}
                    value={isSingleUser ? selectedUser?.surname : 'Multiple Users Selected'}
                    onChange={(event) => onSelectedUserChange(event.target.value, 'surname')}
                  />
                </Stack>
              </Grid>
              <Grid item lg={12}>
                <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                  <TextField
                    sx={Utils.textFieldStyle(theme, isValidUser?.emailAddress)}
                    required={isValidUser?.emailAddress !== 1}
                    id="user-edit-emailaddress"
                    label="Email Address"
                    variant="outlined"
                    disabled={!isSingleUser}
                    value={isSingleUser ? selectedUser?.emailAddress : 'Multiple Users Selected'}
                    onChange={(event) => onSelectedUserChange(event.target.value, 'emailAddress')}
                  />
                  <TextField
                    sx={Utils.textFieldStyle(theme, isValidUser?.mobileNumber)}
                    required={isValidUser?.mobileNumber !== 1}
                    id="user-edit-mobilenumber"
                    label="Mobile Number"
                    variant="outlined"
                    disabled={!isSingleUser}
                    value={isSingleUser ? selectedUser?.mobileNumber : 'Multiple Users Selected'}
                    onChange={(event) => onSelectedUserChange(event.target.value, 'mobileNumber')}
                  />
                </Stack>
              </Grid>
              <Grid item lg={12}>
                <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                  <SelectLabel
                    title="Gender"
                    type={isValidUser?.genderNo}
                    menuItems={genderMenuItems}
                    selectedItems={[selectedUser?.genderNo]}
                    onSelectedMenuItemsChange={(genderNo) => onSelectedUserChange(genderNo, 'genderNo')}
                  />
                  <SelectLabel
                    title="Employee Type"
                    type={isValidUser?.employeeTypeNo}
                    menuItems={employeeTypeMenuItems}
                    selectedItems={[selectedUser?.employeeTypeNo]}
                    onSelectedMenuItemsChange={(employeeTypeNo) => onSelectedUserChange(employeeTypeNo, 'employeeTypeNo')}
                  />
                </Stack>
              </Grid>
              <Grid container item lg={6}>
                <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2, mr: 1 }}>
                  <SelectLabel
                    title="Performance Manager"
                    type={isValidUser?.performanceManagerEmployeeNo}
                    menuItems={performanceManagerMenuItems}
                    selectedItems={[selectedUser?.performanceManagerEmployeeNo]}
                    onSelectedMenuItemsChange={(performanceManagerNo) =>
                      onSelectedUserChange(performanceManagerNo, 'performanceManagerEmployeeNo')
                    }
                  />
                </Stack>
              </Grid>
            </MainCardComponent>
            <Button
              sx={{ m: 2, width: '250px' }}
              disableElevation
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              disabled={!isValidUserStatus}
            >
              {updateUsersLoading ? <CircularProgress size={26} color="inherit" /> : isValidUserStatus ? 'Save' : 'No Changes Made'}
            </Button>
          </form>
        </Grid>
      </DefaultBox>
      <PopUp
        ref={resetPasswordModalRef}
        title="Reset Password"
        description="Are you sure you want to Reset All Selected Users Passwords?"
        backButton
        loading={usersResetPasswordLoading}
        onClick={onResetPasswordPopUpClick}
      />
      <PopUp
        ref={deleteUsersModalRef}
        title="Delete Users"
        description="Are you sure you want to Delete All Selected Users?"
        backButton
        loading={deleteUsersLoading}
        onClick={onDeleteUsersPopUpClick}
      />
    </>
  );
}

UsersEdit.propTypes = {};

export default UsersEdit;
