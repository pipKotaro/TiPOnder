import React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import{Container,Content} from 'native-base';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

//import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge,Body,Left,Right} from 'native-base';

import Footer from './toukou/components/Footer';
import Header from './toukou/components/Header';
import Postphoto from './toukou/components/Postphoto';
import Posttext from './toukou/components/Posttext';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

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
    /*
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
    */
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

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
