import React, { Component } from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { Container, Header, Content, Footer,
        FooterTab, Button, Icon, Text, Badge,
        Body,Left,Right,TouchableHighlight} from 'native-base';

export default class åHeaderExample extends Component {
  render() {
    return (
      <Header>
       <Left>
          <Button transparent>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
        </Left>
      <Body>
      <Text>投稿</Text>
      </Body>
      <Right>
          <Button transparent>
            <Text>Go</Text>
            <Icon name='arrow-forward' />
          </Button>
        </Right>
      </Header>
      );
      }
      }
