import React from 'react';
import { View, Text } from 'react-native';

import { Button } from './ButtonWithMargin';

class ScreenOne extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.openDrawer();
      setTimeout(() => {
        navigation.closeDrawer();
        setTimeout(() => {
          navigation.navigate('ScreenTwo');
        }, 1000)
      }, 1000)
    }, 1000)
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>Screen One</Text>
        <Button
          title="Open Modal One"
          onPress={() => navigation.navigate('ModalOne')}
        />
        <Button
          title="Open Drawer One"
          onPress={() => navigation.openDrawer()}
        />
        <Button
          title="Go to Screen Two"
          onPress={() => navigation.navigate('ScreenTwo')}
        />
      </View>
    );
  }
}

export default ScreenOne;
