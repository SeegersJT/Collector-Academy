import { AndroidOutlined, HeatMapOutlined, PieChartOutlined } from '@ant-design/icons';
import { useTheme } from '@mui/material/styles';

import Users from 'components/dashboard/users/Users.component';

function UsersContainer() {
  const theme = useTheme();

  const onCardListClick = (data) => {
    console.log('data', data);
  };

  const usersData = [
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2025-01-02 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-12-25 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    },
    {
      branch: 'HEADOFFICE',
      employeeType: 'DEVELOPER',
      username: 'VHO HANNO S',
      name: 'Hanno',
      performanceManagerUsername: 'N/A',
      surname: 'Seegers',
      phoneNumber: '+27 64 654 3596',
      emailAddress: 'seegersjt@outlook.com',
      idNumber: '9507175019087',
      gender: 'Male',
      lastActivityDate: '2024-11-01 11:24'
    }
  ];

  const actionsListData = (theme) => [
    {
      title: 'Hanno is Awesome',
      description: 'You know its true',
      titleRight: '100%',
      descriptionRight: 'Help',
      icon: <PieChartOutlined style={{ fontSize: '20px' }} />,
      iconSize: 5,
      color: theme.palette.success.main,
      backgroundColor: theme.palette.success.lighter,
      disabled: false,
      onClick: () => onCardListClick('Hanno is Awesome')
    },
    {
      title: 'Henko is Great',
      description: 'Here are some more text',
      titleRight: '90%',
      descriptionRight: 'I dont know',
      icon: <AndroidOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.warning.main,
      backgroundColor: theme.palette.warning.lighter,
      disabled: false,
      onClick: () => onCardListClick('Henko is Great')
    },
    {
      title: 'SMS Sent',
      description: 'Sent on 2024-12-31 15:31',
      titleRight: 'Received',
      descriptionRight: 'Successfully logged in',
      icon: <HeatMapOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.error.main,
      backgroundColor: theme.palette.error.lighter,
      disabled: false,
      onClick: () => onCardListClick('SMS Sent')
    }
  ];

  return <Users theme={theme} usersData={usersData} actionsListData={actionsListData(theme)} />;
}

UsersContainer.propTypes = {};

export default UsersContainer;
