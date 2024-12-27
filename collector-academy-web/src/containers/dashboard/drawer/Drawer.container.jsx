import { Typography } from '@mui/material';
import Drawer from 'components/dashboard/drawer/Drawer.component';
import NavigationGroup from 'components/dashboard/drawer/drawerContent/navigation/NavigationGroup.component';
import { drawerMenuItems } from './Drawer.helper';
import NavigationItem from 'components/dashboard/drawer/drawerContent/navigation/NavigationItem.componentn';

function DrawerContainer() {
  const navigationGroups = drawerMenuItems.map((item) => {
    const navigationChildren = item.children?.map((childMenuItem) => {
      switch (childMenuItem.type) {
        case 'item':
          return <NavigationItem item={childMenuItem} level={1} />;
        default:
          return (
            <Typography key={childMenuItem.id} variant="h6" color="error" align="center">
              {`Fix - Group Children or Items - ${childMenuItem.title}`}
            </Typography>
          );
      }
    });

    switch (item.type) {
      case 'group':
        return <NavigationGroup title={item.title} navigationChildren={navigationChildren} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            {`Fix - Navigation Group - '${item.title}'`}
          </Typography>
        );
    }
  });

  return <Drawer navigationGroups={navigationGroups} />;
}

DrawerContainer.propTypes = {};

export default DrawerContainer;
