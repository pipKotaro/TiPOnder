import React, { Component } from 'react';
import { StyleSheet, View,Alert,Image,ScrollView,Text,TextInput,ImageBackground} from 'react-native';
import { Container, Header, Content, Footer,
        FooterTab, Button, Icon,Badge,
        Body,Left,Right,TouchableHighlight} from 'native-base';

export default class Posttext extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

render(){
  return(
    <View>//画面全体
    <View style={{flexDirection:'row'}}>//TextImputと画像
    <ImageBackground style={{ padding: 5,margin: 8,width: 150, height: 200}}
             source={{uri : 'https://image.freepik.com/free-icon/no-translate-detected_318-11159.jpg'}}>
             //↑ここに選択した画像を表示する
             </ImageBackground>
    <TextInput
      style={{height:200 ,flex:1,fontSize:15}}
      placeholder="質問を書く..."
      onChangeText={(text) => this.setState({text})}
       multiline = {true}
    />
  //  <Text style={{padding: 10, fontSize: 42}}></Text>
    </View>
    <View style={{height: '100%',backgroundColor:'#5E5C5D'}}>//暗くする画面

</View>

    </View>

  );
}
}

const styles = StyleSheet.create({
  welcome: {
   fontSize: 20,
 }
});
