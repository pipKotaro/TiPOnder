import React, { Component } from 'react';
import {StyleSheet, View, ScrollView,Alert} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge,Body,Left,Right} from 'native-base';



export default class FooterExample extends Component {
  onPressLearnMore() {
  Alert.alert('ボタンを押しました！')
  }
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button
            onPress={this.onPressLearnMore}
            >

            <Icon name="home" />
            <Text>Home</Text>

            </Button>
            <Button vertical
            onPress={this.onPressLearnMore}
            >
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button
            onPress={this.onPressLearnMore}
            >
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical
            onPress={this.onPressLearnMore}
            >
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
