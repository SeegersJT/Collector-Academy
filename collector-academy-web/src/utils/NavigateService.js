let navigateFunction;

export const setNavigate = (navigate) => {
  navigateFunction = navigate;
};

export const navigateTo = (path) => {
  console.log('path', path);
  if (navigateFunction) {
    console.log('navigateFunction(path)', navigateFunction(path));
    navigateFunction(path);
  } else {
    console.error('Navigation function is not set');
  }
};
