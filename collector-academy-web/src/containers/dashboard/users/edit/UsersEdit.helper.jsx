const getIsValidBorderColor = (theme, type) => {
  switch (type) {
    case 0:
      return theme.palette.error.main;
    case 2:
      return theme.palette.warning.main;
    case 1:
    default:
      return theme.palette.secondary.light;
  }
};

const getIsValidHoverColor = (theme, type) => {
  switch (type) {
    case 0:
      return theme.palette.error.main;
    case 2:
      return theme.palette.warning.main;
    case 1:
    default:
      return theme.palette.primary.main;
  }
};

const getIsValidFocusColor = (theme, type) => {
  switch (type) {
    case 0:
      return theme.palette.error.main;
    case 2:
      return theme.palette.warning.main;
    case 1:
    default:
      return theme.palette.primary.main;
  }
};

const getIsValidColor = (theme, type) => {
  switch (type) {
    case 0:
      return theme.palette.error.main;
    case 2:
      return theme.palette.warning.main;
    case 1:
    default:
      return theme.palette.secondary[600];
  }
};

export const textFieldStyle = (theme, type) => {
  return {
    flex: 1,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: getIsValidBorderColor(theme, type)
      },
      '&:hover fieldset': {
        borderColor: getIsValidHoverColor(theme, type)
      },
      '&.Mui-focused fieldset': {
        borderColor: getIsValidBorderColor(theme, type)
      },
      '& .MuiFormLabel-root': {
        color: getIsValidColor(theme, type)
      }
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: getIsValidFocusColor(theme, type)
    }
  };
};

export const validateField = (type, value) => {
  switch (type) {
    case 'name':
    case 'surname':
      return /^[A-Z][a-z]*( [A-Z][a-z]*)*$/.test(value);
    case 'emailAddress':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    case 'mobileNumber':
      return /^[0-9]{10}$/.test(value);
    default:
      return true;
  }
};

export const checkIsValidUserStatus = (isValidUser) => {
  if (!isValidUser || typeof isValidUser !== 'object') {
    return false;
  }

  const values = Object.values(isValidUser);

  if (values.includes(0)) {
    return false;
  }

  if (values.includes(2)) {
    return true;
  }

  return false;
};
