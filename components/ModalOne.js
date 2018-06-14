import React from 'react';
import { View, Text } from 'react-native';

import { Button } from './ButtonWithMargin';

class ModalOne extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => { navigation.navigate('ScreenTwo')}, 1000)
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>Modal One</Text>
        <Button
          title="Close Modal One to Screen One"
          onPress={() => navigation.navigate('ScreenOne')}
        />
      </View>
    );
  }
}

export default ModalOne;