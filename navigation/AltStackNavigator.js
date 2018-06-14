import { createStackNavigator } from 'react-navigation';

import ScreenAlt from '../components/ScreenAlt';

const AltStackNavigator = createStackNavigator({
  ScreenAlt: { screen: ScreenAlt },
}, {
  headerMode: 'none',
});

export default AltStackNavigator;
