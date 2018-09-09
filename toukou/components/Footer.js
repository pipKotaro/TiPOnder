import React, { Component } from 'react';
import {StyleSheet, View, ScrollView,Alert} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge,Body,Left,Right} from 'native-base';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


export default class FooterExample extends Component {
  onPressLearnMore() {
  Alert.alert('ボタンを押しました！')
  }
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button
            onPress={() => this.props.navigation.navigate('HomeView') }
            >

            <Icon name="home" />


            </Button>
            <Button vertical
            onPress={() => this.props.navigation.navigate('CameraView2') }
            >
              <Icon name="camera" />

            </Button>
            <Button
            onPress={this.onPressLearnMore}
            >
              <Icon active name="navigate" />

            </Button>
            <Button vertical
            onPress={this.onPressLearnMore}
            >
              <Icon name="settings" />

            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
