import React from 'react';
import { View, Text } from 'react-native';

import { Button } from './ButtonWithMargin';

class DrawerOne extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>Drawer One</Text>
        <Button
          title="Go to Screen Alt"
          onPress={() => navigation.navigate('ScreenAlt')}
        />
      </View>
    );
  }
}

export default DrawerOne;
