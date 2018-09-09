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
      <Button transparent
        onPress={() => this.props.navigation.navigate('HomeView') }
      >
         <Image style={{ padding: 5,margin: 10,width: 20, height: 20,backgroundColor: '#444C5C'}}
         source = {{uri:'https://i.gyazo.com/9afb239d09983865e4da63f9e1b1adf5.png'}}>
                  </Image>
        </Button>
       </Left>

      <Body>
      <Text  style={{color: 'white', fontWeight: 'bold',textAlign: 'center'}}>カメラロール</Text>
      </Body>

      <Right>
          <Button transparent
            onPress={() => this.props.navigation.navigate('Posttext') }
          >
          <Image style={{ padding: 7,margin: 0,width: 27, height: 20}}
          source = {{uri:'https://i.gyazo.com/8862625216fb020c8439283960844481.png'}}>
                   </Image>
          </Button>
        </Right>
      </Header>
      );
  }
}
