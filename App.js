import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text,Button,TouchableWithoutFeedback,Alert,Image } from 'react-native';
import { Constants,AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import{Container,Content} from 'native-base';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import toukou from './toukou/image/toukou.png';
//import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge,Body,Left,Right} from 'native-base';

import Footer from './toukou/components/Footer';
import MyHeader from './toukou/components/Header';
import MyHeader2 from './toukou/components/Header2';
import MyHeader3 from './toukou/components/Header3';
import Postphoto from './toukou/components/Postphoto';
import Posttext from './toukou/components/Posttext';
import HomeScreen from './screens/HomeScreen';
import First from './firstView';
import CameraView from './camera';
import CameraView2 from './camera2';

import aaa from './aaa';
import bbb from './bbb';

export default class App extends React.Component {
  static navigationOptions = {
          header: null,
      }
  render() {
    return <RootStack />;
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
      <TouchableWithoutFeedback style={{flex:1}} onPress={() => this.props.navigation.navigate('HomeView')}>
         <Image source={{uri:'https://i.gyazo.com/1e221d683c11b25f9c4be8cd26c5defe.png'}} style={{flex:1}} />
    </TouchableWithoutFeedback >
    );
  }
}

class ScreenComponentTwo extends React.Component {

  static navigationOptions = {
          header: null,
      }

  render() {
    return (
      <Container>

      <MyHeader navigation={this.props.navigation}>
        </MyHeader>

        <HomeScreen>
        </HomeScreen>


      <Footer navigation={this.props.navigation}>
        </Footer>

         </Container>
    );
  }
}

class ScreenComponentThree extends React.Component {

  static navigationOptions = {
          header: null,
      }

  render() {
    return (
      <Container>

      <MyHeader2 navigation={this.props.navigation}>
        </MyHeader2>

        <Postphoto navigation={this.props.navigation}>
        </Postphoto>


        <Footer navigation={this.props.navigation}>
          </Footer>
         </Container>
    );
  }
}

class ScreenComponentFore extends React.Component {

  static navigationOptions = {
          header: null,
      }

  render() {
    return (
      <Container>


        <CameraView navigation={this.props.navigation}>
        </CameraView>


         </Container>
    );
  }
}

class ScreenComponentFore2 extends React.Component {

  static navigationOptions = {
          header: null,
      }

  render() {
    return (
      <Container>


        <CameraView2 navigation={this.props.navigation}>
        </CameraView2>


         </Container>
    );
  }
}


class ScreenComponentFive extends React.Component {

  static navigationOptions = {
          header: null,
      }

  render() {
    return (
      <Container>

      <MyHeader3 navigation={this.props.navigation}>
        </MyHeader3>

        <Posttext navigation={this.props.navigation}>
        </Posttext>


        <Footer navigation={this.props.navigation}>
          </Footer>
         </Container>
    );
  }
}

export const RootStack = createStackNavigator(
  {
    Home: ScreenComponentOne,
    HomeView: ScreenComponentTwo,
    Postphoto: ScreenComponentThree,
    CameraView: ScreenComponentFore,
    CameraView2: ScreenComponentFore2,
    Posttext: ScreenComponentFive
  },
  {
    initialRouteName: 'Home', //最初の画面
  }
);
