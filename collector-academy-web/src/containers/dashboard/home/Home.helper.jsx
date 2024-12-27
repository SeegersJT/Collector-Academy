import React from 'react';
import { NumericFormat } from 'react-number-format';
import { CellAlign, CellPadding } from 'utils/constants/Table.enum';
import { Utils } from 'utils/Utils';

export const getCourseActivityData = (theme) => [
  {
    name: 'Month',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    collection: [
      {
        name: 'Courses Passed',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35],
        color: theme.palette.primary.main
      },
      {
        name: 'Courses Failed',
        data: [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41],
        color: theme.palette.error.main
      }
    ],
    tickAmount: 11
  },
  {
    name: 'Week',
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    collection: [
      {
        name: 'Courses Passed',
        data: [11, 32, 45, 32, 34, 52, 41],
        color: theme.palette.primary.main
      },
      {
        name: 'Courses Failed',
        data: [31, 40, 28, 51, 42, 109, 100],
        color: theme.palette.error.main
      }
    ],
    tickAmount: 7
  }
];

export const getUserActivityData = (theme) => [
  {
    name: 'Daily',
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    collection: [
      {
        name: 'Daily Users',
        data: [80, 95, 70, 42, 65, 55, 78],
        color: theme.palette.primary.main
      }
    ],
    tickAmount: 7
  }
];

export const getHeaderData = [
  { id: 'employeeNo', label: 'EMPOYEE NO.', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'username', label: 'USERNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'courseName', label: 'COURSE NAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'status', label: 'STATUS', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'percentage', label: 'PERCENTAGE', align: CellAlign.LEFT, padding: CellPadding.NORMAL }
];

export const getColumnModifiers = [
  { id: 'employeeNo', label: 'EMPOYEE NO.', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'username', label: 'USERNAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'courseName', label: 'COURSE NAME', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'status', label: 'STATUS', align: CellAlign.LEFT, padding: CellPadding.NORMAL },
  { id: 'percentage', label: 'PERCENTAGE', align: CellAlign.LEFT, padding: CellPadding.NORMAL }
];

export const formatCourseActivityData = () => {
  const data = [
    { employeeNo: 175846, username: 'VHO HANNO S', courseName: 'How to JAVA for dummies', statusNo: 1, status: 'PASSED', percentage: 50 },
    {
      employeeNo: 148957,
      username: 'VHO HANNO S',
      courseName: 'How to JAVA for dummies',
      statusNo: 2,
      status: 'NOT STARTED',
      percentage: 50
    },
    {
      employeeNo: 178547,
      username: 'VHO HANNO S',
      courseName: 'How to JAVA for dummies',
      statusNo: 0,
      status: 'FAILED 1STE ATTEMPT',
      percentage: 50
    },
    {
      employeeNo: 359874,
      username: 'VHO HANNO S',
      courseName: 'How to JAVA for dummies',
      statusNo: 0,
      status: 'FAILED 2ND ATTEMPT',
      percentage: 50
    },
    {
      employeeNo: 983416,
      username: 'VHO HANNO S',
      courseName: 'How to JAVA for dummies',
      statusNo: 2,
      status: 'NOT STARTED',
      percentage: null
    },
    {
      employeeNo: 987451,
      username: 'VHO HANNO S',
      courseName: 'How to JAVA for dummies',
      statusNo: 2,
      status: 'NOT STARTED',
      percentage: null
    },
    {
      employeeNo: 254863,
      username: 'VHO HANNO S',
      courseName: 'How to JAVA for dummies',
      statusNo: 2,
      status: 'NOT STARTED',
      percentage: null
    }
  ];

  return data.map((courseResults) => ({
    employeeNo: courseResults.employeeNo,
    username: courseResults.username,
    courseName: courseResults.courseName,
    status: courseResults.status,
    percentage: Utils.isNull(courseResults.percentage) ? (
      'N/A'
    ) : (
      <NumericFormat value={courseResults.percentage} displayType="text" suffix=" %" />
    )
  }));
};