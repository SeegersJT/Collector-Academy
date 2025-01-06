import { useTheme } from '@mui/material/styles';

import { formatActionsListData } from './UsersDashboard.helper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsers } from 'redux/actions/Users.action';
import UsersDashboard from 'components/dashboard/users/UsersDashboard.component';

function UsersDashboardContainer() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { users, usersLoading } = useSelector((state) => state.users);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(requestUsers(accessToken));
  }, [dispatch, accessToken]);

  const handleOnCardListClick = (data) => {
    console.log('data', data);
  };

  const handleOnToolbarClick = (index, selectedItems) => {
    console.log('index', index);
    console.log('selectedItems', selectedItems);
    const employeeNos = selectedItems.map((selectedItem) => {
      return selectedItem.employeeNo;
    });

    console.log('EMPLOYEE NO', employeeNos);
  };

  return (
    <UsersDashboard
      theme={theme}
      usersData={users}
      usersDataLoading={usersLoading}
      actionsListData={formatActionsListData(theme, handleOnCardListClick)}
      onToolbarClick={handleOnToolbarClick}
    />
  );
}

UsersDashboardContainer.propTypes = {};

export default UsersDashboardContainer;
