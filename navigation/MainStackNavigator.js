import { createStackNavigator } from 'react-navigation';

import ScreenOne from '../components/ScreenOne';
import ScreenTwo from '../components/ScreenTwo';
import ScreenThree from '../components/ScreenThree';

const MainStackNavigator = createStackNavigator({
  ScreenOne: {
    screen: ScreenOne,
    navigationOptions: {
      title: 'Screen One'
    }
  },
  ScreenTwo: {
    screen: ScreenTwo,
    navigationOptions: {
      title: 'Screen Two'
    }
  },
  ScreenThree: {
    screen: ScreenThree,
    navigationOptions: {
      title: 'Screen Three'
    }
  },
}, {
  initialRouteName: 'ScreenOne',
});

export default MainStackNavigator;
