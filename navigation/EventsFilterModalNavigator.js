import React from 'react';
import { createStackNavigator, HeaderBackButton, NavigationActions } from 'react-navigation';

import EventsFilterModalScreen from '../screens/events/EventsFilterModalScreen';

const EventsFilterModalNavigator = createStackNavigator({
  EventsFilterModalScreen: {
    screen: EventsFilterModalScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Filter',
      headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.dispatch(NavigationActions.back({ key: null }))}
        />
      ),
    })
  },
}, {
  initialRouteName: 'EventsFilterModalScreen',
  mode: 'modal',
});

export default EventsFilterModalNavigator;
