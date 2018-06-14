import { createDrawerNavigator } from 'react-navigation';

import AltSwitchNavigator from './AltSwitchNavigator';
import DrawerOne from '../components/DrawerOne';

const AppNavigator = createDrawerNavigator({
  AltSwitch: { screen: AltSwitchNavigator },
}, {
  contentComponent: DrawerOne,
});

export default AppNavigator;
