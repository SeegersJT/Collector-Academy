// assets
import { DashboardOutlined } from '@ant-design/icons';

const dashboard = {
  id: 'group-dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: '/dashboard/home',
      icon: DashboardOutlined,
      breadcrumbs: false,
      role: 5
    },
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/dashboard/users',
      icon: DashboardOutlined,
      breadcrumbs: false,
      role: 4
    },
    {
      id: 'courses',
      title: 'Courses',
      type: 'item',
      url: '/dashboard/courses',
      icon: DashboardOutlined,
      breadcrumbs: false,
      role: 5
    },
    {
      id: 'reporting',
      title: 'Reporting',
      type: 'item',
      url: '/dashboard/reporting',
      icon: DashboardOutlined,
      breadcrumbs: false,
      role: 5
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/dashboard/settings',
      icon: DashboardOutlined,
      breadcrumbs: false,
      role: 5
    }
  ]
};

// const courses = {
//   id: 'courses',
//   title: 'Courses',
//   type: 'group',
//   children: [
//     {
//       id: 'my-Courses',
//       title: 'My Courses',
//       type: 'item',
//       url: '/dashboard/1',
//       icon: LoginOutlined
//     },
//     {
//       id: 'register1',
//       title: 'Register',
//       type: 'item',
//       url: '/dashboard/2',
//       icon: ProfileOutlined
//     }
//   ]
// };

// const utilities = {
//   id: 'utilities',
//   title: 'Utilities',
//   type: 'group',
//   children: [
//     {
//       id: 'util-typography',
//       title: 'Typography',
//       type: 'item',
//       url: '/dashboard/3',
//       icon: FontSizeOutlined
//     },
//     {
//       id: 'util-color',
//       title: 'Color',
//       type: 'item',
//       url: '/dashboard/4',
//       icon: BgColorsOutlined
//     },
//     {
//       id: 'util-shadow',
//       title: 'Shadow',
//       type: 'item',
//       url: '/dashboard/5',
//       icon: BarcodeOutlined
//     }
//   ]
// };

// const support = {
//   id: 'support',
//   title: 'Support',
//   type: 'group',
//   children: [
//     {
//       id: 'sample-page',
//       title: 'Sample Page',
//       type: 'item',
//       url: '/dashboard/6',
//       icon: ChromeOutlined
//     },
//     {
//       id: 'documentation',
//       title: 'Documentation',
//       type: 'item',
//       url: 'https://codedthemes.gitbook.io/mantis/',
//       icon: QuestionOutlined,
//       external: true,
//       target: true
//     }
//   ]
// };

export const drawerMenuItems = [dashboard];
