import React from 'react';
import { View, Text } from 'react-native';

import { Button } from './ButtonWithMargin';

class ScreenThree extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => { navigation.navigate('ScreenAlt')}, 1000)
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>Screen Three</Text>
        <Button
          title="Go to Screen Alt"
          onPress={() => navigation.navigate('ScreenAlt')}
        />
      </View>
    );
  }
}

export default ScreenThree;
