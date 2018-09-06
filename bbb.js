import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json




export default class HomeScreen extends React.Component {

//これでヘッター隠す
  static navigationOptions = {
      header: null,
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>New Screen</Text>
        <Button
          title="aaaaaaaaaaaGo to Camera!!aaaaaaaaaaaaa"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <Text>New Screen</Text>
        <Button
          title="aaaaaaaaaaaGo to FirstPage!!aaaaaaaaaaaaa"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Text>more</Text>
        <Button
          title="Next A!!!"
          onPress={() => this.props.navigation.navigate('aaa')}
        />

      </View>
    );
  }
}
