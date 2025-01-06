import { useTheme } from '@mui/material/styles';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsers, setSelectedUsers } from 'redux/actions/Users.action';
import UsersHome from 'components/dashboard/users/home/UsersHome.component';
import { formatActionsListData } from './UsersHome.helper';
import { navigateTo } from 'utils/NavigateService';

function UsersHomeContainer() {
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
    const selectedUsers = selectedItems.map((selectedItem) => {
      return selectedItem.employeeNo;
    });

    switch (index) {
      case 0:
        // handle Users Delete Code
        break;

      case 1:
        dispatch(setSelectedUsers(selectedUsers));
        navigateTo('/dashboard/users/edit');
        break;

      default:
        break;
    }
  };

  return (
    <UsersHome
      theme={theme}
      usersData={users}
      usersDataLoading={usersLoading}
      actionsListData={formatActionsListData(theme, handleOnCardListClick)}
      onToolbarClick={handleOnToolbarClick}
    />
  );
}

UsersHomeContainer.propTypes = {};

export default UsersHomeContainer;
