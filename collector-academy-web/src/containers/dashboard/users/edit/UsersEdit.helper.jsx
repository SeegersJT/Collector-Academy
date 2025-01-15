import regex from 'utils/regex/Regex';

export const validateField = (type, value) => {
  switch (type) {
    case 'name':
    case 'surname':
      return regex.name.test(value);
    case 'emailAddress':
      return regex.email.test(value);
    case 'mobileNumber':
      return regex.mobileNumber.test(value);
    default:
      return true;
  }
};
