import { Box } from '@mui/material';
import Indicator from 'components/@extends/Indicator.component';
import { CalculationsOperators } from 'utils/constants/Calculations.enum';
import { DateUnit } from 'utils/constants/Datetime.enum';
import { CellAlign, CellPadding, CellWeight } from 'utils/constants/Table.enum';
import { Utils } from 'utils/Utils';

export const getHeaderModifiers = () => [
  { id: 'branch', label: 'BRANCH', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'employeeType', label: 'EMPLOYEE TYPE', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'performanceManagerUsername', label: 'PM USERNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'username', label: 'USERNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'name', label: 'NAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'surname', label: 'SURNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'phoneNumber', label: 'PHONE NUMBER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'emailAddress', label: 'EMAIL ADDRESS', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'idNumber', label: 'ID NUMBER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'gender', label: 'GENDER', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD },
  { id: 'lastActivityDate', label: 'LAST ACTIVITY DATE', align: CellAlign.LEFT, padding: CellPadding.NORMAL, weight: CellWeight.BOLD }
];

export const getColumnModifiers = () => [
  { id: 'branch', label: 'BRANCH', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'employeeType', label: 'EMPLOYEE TYPE', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'performanceManagerUsername', label: 'PM USERNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'username', label: 'USERNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'name', label: 'NAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'surname', label: 'SURNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'phoneNumber', label: 'PHONE NUMBER', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'emailAddress', label: 'EMAIL ADDRESS', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'idNumber', label: 'ID NUMBER', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'gender', label: 'GENDER', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'lastActivityDate', label: 'LAST ACTIVITY DATE', align: CellAlign.LEFT, padding: CellPadding.NORMAL }
];

const getLatestUserActivityDateIndicator = (lastActivityDate) => {
  let color;

  if (Utils.compareDate(lastActivityDate, DateUnit.WEEK, CalculationsOperators.MORE_THAN_EQUALS, 1)) {
    color = 'success';
  } else if (Utils.compareDate(lastActivityDate, DateUnit.MONTH, CalculationsOperators.MORE_THAN_EQUALS, 1)) {
    color = 'warning';
  } else if (Utils.compareDate(lastActivityDate, DateUnit.MONTH, CalculationsOperators.MORE_THAN, 1)) {
    color = 'error';
  } else {
    color = 'error';
  }

  return <Indicator color={color} sx={{ mr: '10px' }} />;
};

export const formatUsersData = (cellData) => {
  return cellData.map((user) => {
    return {
      uuid: user.uuid,
      branch: user.branch,
      employeeType: user.employeeType,
      performanceManagerUsername: user.performanceManagerUsername,
      username: user.username,
      name: user.name,
      surname: user.surname,
      phoneNumber: user.phoneNumber,
      emailAddress: user.emailAddress,
      idNumber: user.idNumber,
      gender: user.gender,
      lastActivityDate: (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          {getLatestUserActivityDateIndicator(user.lastActivityDate)}
          {user.lastActivityDate}
        </Box>
      )
    };
  });
};
