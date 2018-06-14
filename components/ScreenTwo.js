import React from 'react';
import { View, Text } from 'react-native';

import { Button } from './ButtonWithMargin';

class ScreenTwo extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => { navigation.navigate('ScreenThree')}, 1000)
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>Screen Two</Text>
        <Button
          title="Go to Screen Three"
          onPress={() => navigation.navigate('ScreenThree')}
        />
      </View>
    );
  }
}

export default ScreenTwo;
