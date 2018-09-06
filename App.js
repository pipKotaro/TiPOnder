import React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text,Button } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import{Container,Content} from 'native-base';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

//import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge,Body,Left,Right} from 'native-base';

import Footer from './toukou/components/Footer';
import Header from './toukou/components/Header';
import Postphoto from './toukou/components/Postphoto';
import Posttext from './toukou/components/Posttext';

import Camera from './camera'
import aaa from './aaa'
import bbb from './bbb'



class HomeScreen extends React.Component {
  render() {

    return(
      <Container>
      <Header>
        </Header>
        <Content>
        <Postphoto>
        </Postphoto>
        </Content>
      <Footer>
        </Footer>
         </Container>
    );


  /*  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Camera!!"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
    */

  }
}


  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };



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
