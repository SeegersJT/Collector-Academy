import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { CellAlign, CellPadding, CellWeight } from 'utils/constants/Table.enum';

export const getHeaderModifiers = () => [
  { id: 'branchName', label: 'BRANCH', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'employeeType', label: 'EMPLOYEE TYPE', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'performanceManagerUsername', label: 'PM USERNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'username', label: 'USERNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'name', label: 'NAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'surname', label: 'SURNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'mobileNumber', label: 'MOBILE NUMBER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'emailAddress', label: 'EMAIL ADDRESS', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'idNumber', label: 'ID NUMBER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'gender', label: 'GENDER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD }
];

export const getColumnModifiers = () => [
  { id: 'branchName', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'employeeType', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'performanceManagerUsername', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'username', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'name', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'surname', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'mobileNumber', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'emailAddress', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'idNumber', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'gender', align: CellAlign.LEFT, padding: CellPadding.NORMAL }
];

export const getToolbarData = (onToolbarClick) => [
  {
    title: 'Delete',
    icon: <DeleteOutlined />,
    iconColor: 'error',
    onClick: onToolbarClick
  },
  {
    title: 'Edit',
    icon: <EditOutlined />,
    iconColor: 'warning',
    onClick: onToolbarClick
  }
];

export const formatActionsListData = (theme, onCardListClick) => [
  {
    title: 'Add Users',
    description: 'Download the Excel Speadsheet, add the users and Upload said Speadsheet.',
    icon: <PlusCircleOutlined style={{ fontSize: '20px' }} />,
    iconSize: 1,
    color: theme.palette.success.main,
    backgroundColor: theme.palette.success.lighter,
    onClick: () => onCardListClick('/users/add')
  }
];

export const formatUsersData = (cellData) => {
  return cellData.map((user) => {
    return {
      uuid: user.uuid,
      branchName: user.branchName,
      employeeType: user.employeeType,
      performanceManagerUsername: user.performanceManagerUsername,
      username: user.username,
      name: user.name,
      surname: user.surname,
      mobileNumber: user.mobileNumber,
      emailAddress: user.emailAddress,
      idNumber: user.idNumber,
      gender: user.gender
    };
  });
};
