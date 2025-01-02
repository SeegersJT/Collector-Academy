import { useTheme } from '@mui/material/styles';

import Users from 'components/dashboard/users/Users.component';
import { formatActionsListData } from './Users.helper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsers } from 'redux/actions/Users.action';

function UsersContainer() {
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
    <Users
      theme={theme}
      usersData={users}
      usersDataLoading={usersLoading}
      actionsListData={formatActionsListData(theme, handleOnCardListClick)}
      onToolbarClick={handleOnToolbarClick}
    />
  );
}

UsersContainer.propTypes = {};

export default UsersContainer;
