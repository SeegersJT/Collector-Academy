import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import UsersEdit from 'components/dashboard/users/edit/UsersEdit.component';
import { checkIsValidUserStatus, validateField } from './UsersEdit.helper';
import { requestUpdateUsers, requestUsersDelete, requestUsersResetPassword } from 'redux/actions/Users.action';
import { requestAllBranches, requestAllEmployeeTypes, requestAllGenders, requestAllPerformanceManagers } from 'redux/actions/Common.action';
import { navigateTo } from 'utils/NavigateService';
import { CheckSquareOutlined, CloseSquareOutlined, DeleteOutlined, RollbackOutlined } from '@ant-design/icons';

function UsersEditContainer() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const resetPasswordModalRef = useRef();
  const deleteUsersModalRef = useRef();

  const { accessToken } = useSelector((state) => state.auth);
  const { roleNo } = useSelector((state) => state.user);
  const { users, selectedUsers, updateUsersLoading, usersResetPasswordLoading, usersDeleteLoading } = useSelector((state) => state.users);
  const { branches, genders, employeeTypes, performanceManagers } = useSelector((state) => state.common);

  const [title, setTitle] = useState('No Users Selected');
  const [defaultUsers, setDefaultUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isValidUser, setIsValidUser] = useState(null);
  const [isSingleUser, setIsSingleUser] = useState(true);

  const [branchMenuItems, setBranchMenuItems] = useState([]);
  const [employeeTypeMenuItems, setEmployeeTypeMenuItems] = useState([]);
  const [genderMenuItems, setGenderMenuItems] = useState([]);
  const [performanceManagerMenuItems, setPerformanceManagerMenuItems] = useState([]);

  const [actionListData, setActionListData] = useState([]);

  useEffect(() => {
    dispatch(requestAllBranches(accessToken));
    dispatch(requestAllGenders(accessToken));
    dispatch(requestAllEmployeeTypes(accessToken));
    dispatch(requestAllPerformanceManagers(accessToken));
  }, [dispatch, accessToken]);

  useEffect(() => {
    const filteredUsers = users.filter((user) => selectedUsers.includes(user?.employeeNo));

    if (filteredUsers.length === 1) {
      setTitle(`[ ${filteredUsers[0]?.username} ] - User Selected`);

      setSelectedUser({
        branchNo: filteredUsers[0]?.branchNo,
        idNumber: filteredUsers[0]?.idNumber,
        name: filteredUsers[0]?.name,
        surname: filteredUsers[0]?.surname,
        emailAddress: filteredUsers[0]?.emailAddress,
        mobileNumber: filteredUsers[0]?.mobileNumber,
        genderNo: filteredUsers[0]?.genderNo,
        employeeTypeNo: filteredUsers[0]?.employeeTypeNo,
        performanceManagerEmployeeNo: filteredUsers[0]?.performanceManagerEmployeeNo
      });

      setIsValidUser({
        branchNo: 1,
        idNumber: 1,
        name: 1,
        surname: 1,
        emailAddress: 1,
        mobileNumber: 1,
        genderNo: 1,
        employeeTypeNo: 1,
        performanceManagerEmployeeNo: 1
      });
    } else {
      setTitle(`${filteredUsers.length} - Users Selected.`);
      setIsSingleUser(false);
    }

    setDefaultUsers(filteredUsers);
    setCurrentUsers(filteredUsers);
    console.log('changed');
  }, [users, selectedUsers]);

  useEffect(() => {
    console.log('actionListData CHANGED');
    const handleOnAddCourses = () => {
      console.log('ADD COURSES');
    };

    const handleOnRemoveCourses = () => {
      console.log('REMOVE COURSES');
    };

    const handleOnResetPasswords = () => {
      resetPasswordModalRef.current.callPopUpOpen();
    };

    const handleOnDeleteUsers = () => {
      deleteUsersModalRef.current.callPopUpOpen();
    };

    setActionListData([
      {
        title: 'Coming Soon - Add Courses',
        description: 'Add Courses for All Selected Users.',
        icon: <CheckSquareOutlined style={{ fontSize: '20px' }} />,
        color: theme.palette.success.main,
        backgroundColor: theme.palette.success.lighter,
        disabled: false,
        onClick: handleOnAddCourses
      },
      {
        title: 'Coming Soon - Remove Courses',
        description: 'Remove Courses for All Selected Users.',
        icon: <CloseSquareOutlined style={{ fontSize: '20px' }} />,
        color: theme.palette.warning.main,
        backgroundColor: theme.palette.warning.lighter,
        disabled: false,
        onClick: handleOnRemoveCourses
      },
      {
        title: 'Reset Passwords',
        description: 'Reset Passwords for All Selected Users.',
        icon: <RollbackOutlined style={{ fontSize: '20px' }} />,
        iconSize: 5,
        color: theme.palette.error.main,
        backgroundColor: theme.palette.error.lighter,
        disabled: false,
        onClick: handleOnResetPasswords
      },
      {
        title: 'Delete Users',
        description: 'Delete All Selected Users',
        icon: <DeleteOutlined style={{ fontSize: '20px' }} />,
        color: theme.palette.error.main,
        backgroundColor: theme.palette.error.lighter,
        disabled: false,
        onClick: handleOnDeleteUsers
      }
    ]);
  }, [dispatch, accessToken, theme, currentUsers]);

  useEffect(() => {
    setBranchMenuItems(
      branches.map((branch) => ({
        value: branch.branchNo,
        label: branch.branchName
      }))
    );
  }, [branches]);

  useEffect(() => {
    setGenderMenuItems(
      genders.map((gender) => ({
        value: gender.genderNo,
        label: gender.gender
      }))
    );
  }, [genders]);

  useEffect(() => {
    setEmployeeTypeMenuItems(
      employeeTypes.map(
        (employeeType) =>
          roleNo <= employeeType.employeeTypeNo && {
            value: employeeType.employeeTypeNo,
            label: employeeType.employeeType
          }
      )
    );
  }, [employeeTypes, roleNo]);

  useEffect(() => {
    setPerformanceManagerMenuItems(
      performanceManagers.map((performanceManager) => ({
        value: performanceManager.performanceManagerEmployeeNo,
        label: performanceManager.performanceManagerUsername
      }))
    );
  }, [performanceManagers]);

  const handleOnSelectedUserChange = (value, type) => {
    setCurrentUsers(
      currentUsers.map((user) => {
        return {
          ...user,
          [type]: value
        };
      })
    );

    if (isSingleUser) {
      const hasChanged = defaultUsers[0]?.[type] !== value;

      let isValid = 1;

      if (validateField(type, value)) {
        if (hasChanged) {
          isValid = 2;
        } else {
          isValid = 1;
        }
      } else {
        isValid = 0;
      }

      setIsValidUser({
        ...isValidUser,
        [type]: isValid
      });
    }

    setSelectedUser({
      ...selectedUser,
      [type]: value
    });
  };

  const handleOnUsersEditSumbit = (e) => {
    e.preventDefault();

    const onSuccess = () => {
      navigateTo('/dashboard/users/home');
    };

    dispatch(requestUpdateUsers(accessToken, currentUsers, onSuccess));
  };

  const handleOnResetPasswordPopUpClick = () => {
    const onResponse = () => {
      resetPasswordModalRef.current.callPopUpClose();
    };

    dispatch(requestUsersResetPassword(accessToken, currentUsers, onResponse));
  };

  const handleOnDeletUsersPopUpClick = () => {
    const onResponse = () => {
      deleteUsersModalRef.current.callPopUpClose();
      navigateTo('/dashboard/users/home');
    };

    dispatch(requestUsersDelete(accessToken, currentUsers, onResponse));
  };

  return (
    <UsersEdit
      theme={theme}
      title={title}
      isSingleUser={isSingleUser}
      selectedUser={selectedUser}
      isValidUser={isValidUser}
      isValidUserStatus={checkIsValidUserStatus(isValidUser)}
      actionListData={actionListData}
      branchMenuItems={branchMenuItems}
      employeeTypeMenuItems={employeeTypeMenuItems}
      genderMenuItems={genderMenuItems}
      performanceManagerMenuItems={performanceManagerMenuItems}
      resetPasswordModalRef={resetPasswordModalRef}
      deleteUsersModalRef={deleteUsersModalRef}
      updateUsersLoading={updateUsersLoading}
      usersResetPasswordLoading={usersResetPasswordLoading}
      usersDeleteLoading={usersDeleteLoading}
      onSelectedUserChange={handleOnSelectedUserChange}
      onUsersEditSumbit={handleOnUsersEditSumbit}
      onResetPasswordPopUpClick={handleOnResetPasswordPopUpClick}
      onDeleteUsersPopUpClick={handleOnDeletUsersPopUpClick}
    />
  );
}

UsersEditContainer.propTypes = {};
export default UsersEditContainer;
