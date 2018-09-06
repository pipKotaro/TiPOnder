import { View, Modal, Image, CameraRoll,TouchableOpacity,TouchableHighlight,Navigator,Dimensions,StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Fab ,Icon} from 'native-base';
//fabで円のアクション系を書く

import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
// import HomeScreen from './App';

export default class CameraView extends React.Component {

  //header消去
  static navigationOptions = {
      header: null,
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,//カメラの内カメとか,いんかめと
    photo: null,
    flashMode:Camera.Constants.FlashMode.off
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  setPhoto(photo) {
    this.setState({ photo: photo });
  }

  render() {


      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} flashMode={this.state.flashMode}  ref={cam => { this.camera = cam; }} />


          <TouchableHighlight
                onPress={
                  photo => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                      });
                  }
                }>

              <Image
                style = {styles.hanten}
                source = {{uri:'https://i.gyazo.com/d2bed6d0670169b633c5c7a277d8d15f.png'}}>
              </Image>

            </TouchableHighlight>

            /********************************/
            <TouchableHighlight
              onPress={photo => {
                if (this.camera) {
                  this.camera.takePictureAsync().then(photo => {
                    // カメラオブジェクト取得
                    this.setPhoto(photo);
                    // 三秒後にモーダルを閉じる

                  });
                }
              }}>

                <Image
                  style = {styles.shutter}
                  source = {{uri:'https://i.gyazo.com/dd5af74e578c2b1961a5aa104f784f87.png'}}>
                </Image>

              </TouchableHighlight>

            /*******************************/

            <TouchableHighlight
              onPress={photo => {
                 this.setState({
                   flashMode: this.state.flashMode == Camera.Constants.FlashMode.off
                   ? Camera.Constants.FlashMode.on
                   : Camera.Constants.FlashMode.off,
                   });
               }}>

                <Image
                  style = {styles.flash}
                  source = {{
                    uri: this.state.flashMode === Camera.Constants.FlashMode.off
                    ? 'https://i.gyazo.com/1e275378b1839dd9dd7f2941912f39af.png'
                    : 'https://i.gyazo.com/3ca548f985bac989512ea9644b585393.png'
                    }}>
                </Image>

              </TouchableHighlight>

            /*******************************/

            <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Next')}>

                <Image
                  style = {styles.back}
                  source = {{uri:'https://i.gyazo.com/68a742225fc822e6ddda08d06fb2acf8.png'}}>
                </Image>

              </TouchableHighlight>





              //写真画面表示
          <Modal
            animationType="slide"
            visible={this.state.photo !== null}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <Image style={{width: "100%", height: "100%"}}
              source={{ uri: this.state.photo === null ? "" : this.state.photo.uri }}/>


            //写真確認後、OKボタン
            <TouchableHighlight
              transparent
              onPress={() => {this.setPhoto(null);}}
               >
              <Image
                style = {styles.ok}
                source = {{uri:'https://i.gyazo.com/eb5bb04aa0382098c5b49b81b4bd1664.png'}}>
              </Image>
            </TouchableHighlight>

            //写真確認後、キャンセルボタン
            <TouchableHighlight
              transparent
              onPress={() => {this.setPhoto(null);}}
               >
              <Image
                style = {styles.ng}
                source = {{uri:'https://i.gyazo.com/68a742225fc822e6ddda08d06fb2acf8.png'}}>
              </Image>
            </TouchableHighlight>


          </Modal>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    shutter: {
    position: 'absolute',
    left: (Dimensions.get('window').width / 2) - 30,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30, //丸さ具合
  },
    hanten: {
    position: 'absolute',
    left: (Dimensions.get('window').width - 70),
    bottom:(Dimensions.get('window').height - 75),
    width: 40,
    height: 40,
    borderRadius: 20, //丸さ具合
},
    flash: {
    position: 'absolute',
    left: (Dimensions.get('window').width/2-20),
    bottom:(Dimensions.get('window').height - 75),
    width: 40,
    height: 40,
    borderRadius: 20, //丸さ具合
},
    back: {
    position: 'absolute',
    left: (35),
    bottom:(Dimensions.get('window').height - 75),
    width: 40,
    height: 35,
    borderRadius: 20, //丸さ具合
},
    ok: {
    position: 'absolute',
    left: (Dimensions.get('window').width / 2) - 30,
    bottom: 40,
    width: 60,
    height: 60,
    borderRadius: 30, //丸さ具合
},
    ng: {
    position: 'absolute',
    left: (25),
    bottom:(Dimensions.get('window').height - 70),
    width: 40,
    height: 35,
    borderRadius: 20, //丸さ具合
}



});

// const RootStack = createStackNavigator(
//   {
//     Home: CameraView,
//     Details: HomeScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );
