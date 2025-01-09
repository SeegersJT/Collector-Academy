import { useTheme } from '@mui/material/styles';

import UsersAdd from 'components/dashboard/users/add/UsersAdd.component';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Utils } from 'utils/Utils';

function UsersAddContainer() {
  const theme = useTheme();

  const { validateUsers } = useSelector((state) => state.users);

  const [usersData, setUserData] = useState([]);
  const [validityUsersData, setValidityUsersData] = useState([]);
  const [validityReasonUsersData, setValidityReasonUsersData] = useState([]);

  useEffect(() => {
    const formatUsersData = validateUsers.rows.map((row) => {
      const randomId = Utils.generateRandomID();

      const rowObject = {
        randomId: randomId
      };

      row.cells.forEach((cell) => {
        rowObject[cell.header] = cell.value;
      });

      return rowObject;
    });

    const formatValidityUsersData = validateUsers.rows.map((row, index) => {
      const randomId = formatUsersData[index].randomId;

      const rowObject = {
        randomId: randomId
      };

      row.cells.forEach((cell) => {
        rowObject[cell.header] = cell.validity;
      });

      return rowObject;
    });

    const formatValidityReasonUsersData = validateUsers.rows.map((row, index) => {
      const randomId = formatUsersData[index].randomId;

      const rowObject = {
        randomId: randomId
      };

      row.cells.forEach((cell) => {
        rowObject[cell.header] = cell.validityReason;
      });

      return rowObject;
    });

    setUserData(formatUsersData);
    setValidityUsersData(formatValidityUsersData);
    setValidityReasonUsersData(formatValidityReasonUsersData);
  }, [validateUsers]);

  return (
    <UsersAdd
      theme={theme}
      usersData={usersData}
      validityUsersData={validityUsersData}
      validityReasonUsersData={validityReasonUsersData}
      usersDataLoading={false}
    />
  );
}

UsersAddContainer.propTypes = {};

export default UsersAddContainer;
