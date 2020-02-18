import Search20 from '../../icons/lib/Search20';
import Help20 from '../../icons/lib/Help20';
import Notification20 from '../../icons/lib/Notification20';
import UserAvatar20 from '../../icons/lib/UserAvatar20';
import AppSwitcher20 from '../../icons/lib/AppSwitcher20';
import Close20 from '../../icons/lib/Close20';

export const leftPanelActions = {
  search: {
    actionString: 'Search',
    iconProps: {
      class: undefined,
      skeleton: false,
      render: Search20,
      title: 'Search',
      tabindex: '0',
      focusable: false,
      style: undefined
    }
  },
  help: {
    actionString: 'Help',
    iconProps: {
      class: undefined,
      skeleton: false,
      render: Help20,
      title: 'Help',
      tabindex: '0',
      focusable: false,
      style: undefined
    }
  },
  notifications: {
    actionString: 'Notifications',
    iconProps: {
      class: undefined,
      skeleton: false,
      render: Notification20,
      title: 'Notifications',
      tabindex: '0',
      focusable: false,
      style: undefined
    }
  },
  account: {
    actionString: 'Account',
    iconProps: {
      class: undefined,
      skeleton: false,
      render: UserAvatar20,
      title: 'Account',
      tabindex: '0',
      focusable: false,
      style: undefined
    }
  },
  switcher: {
    actionString: 'Switcher',
    iconProps: {
      class: undefined,
      skeleton: false,
      render: AppSwitcher20,
      title: 'App Switcher',
      tabindex: '0',
      focusable: false,
      style: undefined
    }
  }
};

export const leftPanelTypes = {
  search: 'Search',
  component: 'Component',
  link: 'Link',
  links: 'Links'
};

export const closeIcon = {
  class: undefined,
  skeleton: false,
  render: Close20,
  title: 'Close',
  tabindex: '0',
  focusable: false,
  style: undefined
};
