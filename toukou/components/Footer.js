import React, { Component } from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge,Body,Left,Right} from 'native-base';

export default class FooterExample extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
