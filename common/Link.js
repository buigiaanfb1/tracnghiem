export const profileTabs = {
  tabsProfile: {
    name: 'My Settings',
    tabs: [
      {
        label: 'Personal Information',
        keyName: '1',
        fullUri: '/profile/personal-information',
        uri: 'personal-information',
      },
      {
        label: 'Account',
        keyName: '2',
        fullUri: '/profile/account',
        uri: 'account',
      },
      {
        label: 'Payment and Billing',
        keyName: '3',
        fullUri: '/profile/payment-billing',
        uri: 'payment-billing',
      },
    ],
  },
};

import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HistoryIcon from '@material-ui/icons/History';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import ClassIcon from '@material-ui/icons/Class';

export const mainNavigate = [
  {
    IconBold: HomeIcon,
    IconOutlined: HomeOutlinedIcon,
    abstractName: '',
    navLinkName: '/',
    keyName: '1',
  },
  {
    IconBold: ClassIcon,
    IconOutlined: ClassOutlinedIcon,
    abstractName: 'courses',
    navLinkName: 'courses',
    keyName: '2',
  },
  {
    IconBold: HistoryIcon,
    IconOutlined: HistoryIcon,
    abstractName: 'history',
    navLinkName: 'history',
    keyName: '3',
  },
  {
    IconBold: AccountCircleIcon,
    IconOutlined: AccountCircleOutlinedIcon,
    abstractName: 'profile',
    navLinkName: 'profile/personal-information',
    keyName: '4',
  },
  {
    IconBold: SettingsIcon,
    IconOutlined: SettingsOutlinedIcon,
    abstractName: 'settings',
    navLinkName: 'settings',
    keyName: '5',
  },
];
