import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Camera from './camera'
import aaa from './aaa'
import bbb from './bbb'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Camera!!"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: Camera,
    Next:aaa,
    bbb:bbb,
  },
  {
    initialRouteName: 'Home', //最初の画面
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
