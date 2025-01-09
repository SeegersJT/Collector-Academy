import { Tooltip, Typography } from '@mui/material';
import { CellAlign, CellPadding, CellWeight } from 'utils/constants/Table.enum';

export const getHeaderModifiers = () => [
  { id: 'NAME', label: 'NAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'SURNAME', label: 'SURNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'ID_NUMBER', label: 'ID NUMBER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'EMAIL_ADDRESS', label: 'EMAIL ADDRESS', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'MOBILE_NUMBER', label: 'MOBILE NUMBER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'GENDER', label: 'GENDER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'BRANCH_NAME', label: 'BRANCH NAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD }
];

export const getColumnModifiers = () => [
  { id: 'NAME', label: 'NAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'SURNAME', label: 'SURNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'ID_NUMBER', label: 'ID NUMBER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'EMAIL_ADDRESS', label: 'EMAIL ADDRESS', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'MOBILE_NUMBER', label: 'MOBILE NUMBER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'GENDER', label: 'GENDER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'BRANCH_NAME', label: 'BRANCH NAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD }
];

//   export const getToolbarData = () => [
//     {
//       title: 'Delete',
//       icon: <DeleteOutlined />,
//       iconColor: 'error'
//     },
//     {
//       title: 'Edit',
//       icon: <EditOutlined />,
//       iconColor: 'warning'
//     }
//   ];

//   export const formatActionsListData = (theme, onCardListClick) => [
//     {
//       title: 'Download Users Template',
//       description: 'Download the Excel Speadsheet, add the users and Upload said Speadsheet.',
//       icon: <PlusCircleOutlined style={{ fontSize: '20px' }} />,
//       iconSize: 1,
//       color: theme.palette.success.main,
//       backgroundColor: theme.palette.success.lighter,
//       onClick: () => onCardListClick('/users/add')
//     }
//   ];

export const formatUsersData = (cellData, validityUsersData, validityReasonUsersData) => {
  console.log('=====================================');
  console.log('cellData', cellData);
  console.log('validityUsersData', validityUsersData);
  console.log('validityReasonUsersData', validityReasonUsersData);
  console.log('=====================================');

  return cellData.map((user) => {
    const randomId = user.randomId;

    const validity = validityUsersData.find((item) => item.randomId === randomId);
    const validityReason = validityReasonUsersData.find((item) => item.randomId === randomId);

    const formatCell = (header) => {
      const isValid = validity ? validity[header] : true;
      const reason = validityReason ? validityReason[header] || 'No reason provided' : 'No reason provided';

      return (
        <Tooltip key={`${randomId}-${header}`} title={isValid ? '' : reason}>
          <Typography color={isValid ? 'textPrimary' : 'error'}>{user[header]}</Typography>
        </Tooltip>
      );
    };

    return {
      uuid: user.uuid,
      NAME: formatCell('NAME'),
      SURNAME: formatCell('SURNAME'),
      ID_NUMBER: formatCell('ID_NUMBER'),
      EMAIL_ADDRESS: formatCell('EMAIL_ADDRESS'),
      MOBILE_NUMBER: formatCell('MOBILE_NUMBER'),
      GENDER: formatCell('GENDER'),
      BRANCH_NAME: formatCell('BRANCH_NAME')
    };
  });
};
