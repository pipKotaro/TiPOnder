import React, { Component } from 'react';
import {StyleSheet, View, ScrollView,Alert,Image} from 'react-native';
import { Container, Header, Content, Footer,
        FooterTab, Button, Icon, Text, Badge,
        Body,Left,Right,TouchableHighlight} from 'native-base';
import batu from '../image/batu.png';
import tugi from '../image/tugi.png';



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
      <Header style={{backgroundColor: '#444C5C'}}>
       <Left>
          <Button
          transparent
          onPress={this.onPressLearnMore1}
          >

          <Image style={{ padding: 5,margin: 7,width: 20, height: 20}}
                   source={batu}>
                   </Image>

          </Button>
        </Left>
      <Body>
      <Text  style={{color: 'white', fontWeight: 'bold'}}>投稿</Text>
      </Body>
      <Right>
          <Button transparent
          onPress={this.onPressLearnMore2}
          >
          <Image style={{ padding: 5,margin: 7,width: 30, height: 20}}
                   source={tugi}>
                   </Image>
          </Button>
        </Right>
      </Header>
      );
      }
      }
