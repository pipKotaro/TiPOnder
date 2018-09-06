import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text,Button,TouchableWithoutFeedback,Alert,Image } from 'react-native';
import { Constants,AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import{Container,Content} from 'native-base';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

//import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge,Body,Left,Right} from 'native-base';

import Footer from './toukou/components/Footer';
import Header from './toukou/components/Header';
import Postphoto from './toukou/components/Postphoto';
import Posttext from './toukou/components/Posttext';
import HomeScreen from './screens/HomeScreen';
import First from './firstView';
import Camera from './camera';
import aaa from './aaa';
import bbb from './bbb';




export default class App extends React.Component {
  static navigationOptions = {
          header: null,
      }
  render() {
    return <MyNavigator />;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

class ScreenComponentOne extends React.Component {

  static navigationOptions = {
    headerTitle: 'First screen',
  };

  static navigationOptions = {
       header: null,
   }

  render() {
    return (
      <TouchableWithoutFeedback style={{flex:1}} onPress={() => this.props.navigation.navigate('RouteNameTwo')}>
         <Image source={{uri:'https://i.gyazo.com/1e221d683c11b25f9c4be8cd26c5defe.png'}} style={{flex:1}} />
    </TouchableWithoutFeedback >
    );
  }
}

class ScreenComponentTwo extends React.Component {
  static navigationOptions = {
    headerTitle: 'Second screen',
  };
  static navigationOptions = {
          header: null,
      }

  render() {
    return (
      <Container>
      <Header>
        </Header>
        <Content>
        <HomeScreen>
        </HomeScreen>
        </Content>
      <Footer>
        </Footer>
         </Container>
    );
  }
}

class ScreenComponentThree extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: `Number: ${navigation.getParam('randomNumber')}`,
    };
  };

  static navigationOptions = {
       header: null,
   }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 25,
          borderColor: 'purple',
        }}>
        <Text style={{ fontSize: 25 }}>
          {this.props.navigation.getParam('randomNumber')}
        </Text>
        <Button
          title="Get a new random number"
          onPress={() => {
            this.props.navigation.setParams({
              randomNumber: getRandomNumber(),
            });
          }}
        />
        <Button
          title="Add another two"
          onPress={() => this.props.navigation.push('RouteNameTwo')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    RouteNameOne: ScreenComponentOne,
    RouteNameTwo: ScreenComponentTwo,
    RouteNameThree: ScreenComponentThree,
  },
  {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);
