import React, { Component } from 'react';
import { Alert, Image } from 'react-native';
import { Header, Button, Text, Body, Left, Right } from 'native-base';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import toukou from '../image/toukou.png';

export default class MyHeader extends Component {

  constructor(props) {
    super(props);
  }

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

         <Image style={{ padding: 5,margin: 7,width: 20, height: 20,backgroundColor: '#444C5C'}}>
                  </Image>
       </Left>

      <Body>
      <Text  style={{color: 'white', fontWeight: 'bold',textAlign: 'center'}}>CLOVER</Text>
      </Body>

      <Right>
          <Button transparent
            onPress={() => this.props.navigation.navigate('Postphoto') }
          >
          <Image style={{ padding: 5,margin: 7,width: 30, height: 29}}
                   source={toukou}>
                   </Image>
          </Button>
        </Right>
      </Header>
      );
  }
}
