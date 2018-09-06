import React, { Component } from 'react';
import {StyleSheet, View, ScrollView,Alert} from 'react-native';
import { Container, Header, Content, Footer,
        FooterTab, Button, Icon, Text, Badge,
        Body,Left,Right,TouchableHighlight} from 'native-base';

export default class HeaderExample extends Component {
  onPressLearnMore() {
  Alert.alert('ボタンを押しました！')
}

onPressLearnMore1() {
Alert.alert('宮前の画面に移動')
}

onPressLearnMore2() {
Alert.alert('投稿テキスト画面に移動')
}

  render() {
    return (
      <Header>
       <Left>
          <Button
          transparent
          onPress={this.onPressLearnMore1}
          >

            <Text>✕</Text>
          </Button>
        </Left>
      <Body>
      <Text>投稿</Text>
      </Body>
      <Right>
          <Button transparent
          onPress={() => this.onPressLearnMore2}

          >
            <Text>Go</Text>
            <Icon name='arrow-forward' />
          </Button>
        </Right>
      </Header>
      );
      }
      }
