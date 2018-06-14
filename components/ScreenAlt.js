import React from 'react';
import { View, Text } from 'react-native';

import { Button } from './ButtonWithMargin';

class ScreenAlt extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => { navigation.navigate('ScreenOne')}, 1000)
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>Screen Alt</Text>
        <Button
          title="Go to Screen One"
          onPress={() => navigation.navigate('ScreenOne')}
        />
      </View>
    );
  }
}

export default ScreenAlt;
