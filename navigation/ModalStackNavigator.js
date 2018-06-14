import { createStackNavigator } from 'react-navigation';

import MainStackNavigator from './MainStackNavigator';
import ModalOne from '../components/ModalOne';

const ModalStackNavigator = createStackNavigator({
  Main: {
    screen: MainStackNavigator,
    navigationOptions: {
      header: null,
    }
  },
  ModalOne: {
    screen: ModalOne,
    navigationOptions: {
      title: 'Modal One',
    }
  },
}, {
  initialRouteName: 'Main',
  mode: 'modal',
});

export default ModalStackNavigator;
