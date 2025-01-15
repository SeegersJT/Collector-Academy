import { useTheme } from '@mui/material/styles';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestAddUsersFileUploadValidate,
  requestAddUserTemplateDownload,
  requestUsers,
  setSelectedUsers
} from 'redux/actions/Users.action';
import UsersHome from 'components/dashboard/users/home/UsersHome.component';
import { formatAddActionsListData, formatDownloadActionsListData } from './UsersHome.helper';
import { navigateTo } from 'utils/NavigateService';

function UsersHomeContainer() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { users, usersLoading, addUsersFileUploadValidateLoading } = useSelector((state) => state.users);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(requestUsers(accessToken));
  }, [dispatch, accessToken]);

  const handleOnAddCardListClick = () => {
    navigateTo('/dashboard/users/add');
  };

  const handleOnDownloadCardListClick = () => {
    dispatch(requestAddUserTemplateDownload(accessToken));
  };

  const handleOnToolbarClick = (index, selectedItems) => {
    const selectedUsers = selectedItems.map((selectedItem) => {
      return selectedItem.employeeNo;
    });

    switch (index) {
      case 0:
        dispatch(setSelectedUsers(selectedUsers));
        navigateTo('/dashboard/users/edit');
        break;

      default:
        break;
    }
  };

  const handleOnFileUpload = (file) => {
    dispatch(requestAddUsersFileUploadValidate(accessToken, file));
  };

  return (
    <UsersHome
      theme={theme}
      usersData={users}
      usersDataLoading={usersLoading}
      addUsersFileUploadValidateLoading={addUsersFileUploadValidateLoading}
      addActionsListData={formatAddActionsListData(theme, handleOnAddCardListClick)}
      downloadActionsListData={formatDownloadActionsListData(theme, handleOnDownloadCardListClick)}
      onToolbarClick={handleOnToolbarClick}
      onFileUpload={handleOnFileUpload}
    />
  );
}

UsersHomeContainer.propTypes = {};

export default UsersHomeContainer;
