import { createSwitchNavigator } from 'react-navigation';

import ModalStackNavigator from './ModalStackNavigator';
import AltStackNavigator from './AltStackNavigator';

const AltSwitchNavigator = createSwitchNavigator({
  Modal: { screen: ModalStackNavigator },
  Auth: { screen: AltStackNavigator },
}, {
  initialRouteName: 'Modal',
});

export default AltSwitchNavigator;
