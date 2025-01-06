import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import UsersEdit from 'components/dashboard/users/edit/UsersEdit.component';
import {
  AndroidOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined,
  DeleteOutlined,
  HeatMapOutlined,
  PieChartOutlined,
  RollbackOutlined
} from '@ant-design/icons';

function UsersEditContainer() {
  const theme = useTheme();

  const { users, selectedUsers } = useSelector((state) => state.users);

  const [title, setTitle] = useState('No Users Selected');
  const [currentUsers, setCurrentUsers] = useState([]);
  const [isMultipleUsers, setIsMultipleUsers] = useState(false);
  const [singleUser, setSingleUser] = useState({}); // replace empty/null object with constatn empty user data

  useEffect(() => {
    const filteredUsers = users.filter((user) => selectedUsers.includes(user.employeeNo));

    if (filteredUsers.length === 1) {
      setTitle(`${filteredUsers[0].username} - User Selected`);
      setIsMultipleUsers(false);
      setSingleUser(filteredUsers[0]);
    } else {
      setTitle(`${filteredUsers.length} - Users Selected.`);
      setIsMultipleUsers(true);
      setSingleUser(null);
    }

    setCurrentUsers(filteredUsers);
  }, [users, selectedUsers]);

  // move this to helper
  const actionListData = (theme) => [
    {
      title: 'Add Courses',
      description: 'Add Courses for All Selected Users.',
      icon: <CheckSquareOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.success.main,
      backgroundColor: theme.palette.success.lighter,
      disabled: false,
      onClick: () => {}
    },
    {
      title: 'Remove Courses',
      description: 'Remove Courses for All Selected Users.',
      icon: <CloseSquareOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.warning.main,
      backgroundColor: theme.palette.warning.lighter,
      disabled: false,
      onClick: () => {}
    },
    {
      title: 'Reset Password',
      description: 'Reset Passwords for All Selected Users.',
      icon: <RollbackOutlined style={{ fontSize: '20px' }} />,
      iconSize: 5,
      color: theme.palette.error.main,
      backgroundColor: theme.palette.error.lighter,
      disabled: false,
      onClick: () => {}
    },
    {
      title: 'Delete Users',
      description: 'Delete All Selected Users',
      icon: <DeleteOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.error.main,
      backgroundColor: theme.palette.error.lighter,
      disabled: false,
      onClick: () => {}
    }
  ];

  return <UsersEdit title={title} isMultipleUsers={isMultipleUsers} singleUser={singleUser} actionListData={actionListData(theme)} />;
}

UsersEditContainer.propTypes = {};
export default UsersEditContainer;
