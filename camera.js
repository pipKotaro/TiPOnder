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
                source = {{uri:'https://i.gyazo.com/59b0c34869c0a7d2bca5c4125abbe380.png'}}>
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
                    setTimeout(() => {
                      this.setPhoto(null);
                      // 写真を保存
                      CameraRoll.saveToCameraRoll(photo.uri);
                    }, 3000);
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
                    ? 'https://i.gyazo.com/1197340ec27d70777813db7b726c5bdd.png'
                    : 'https://i.gyazo.com/3b2175d30266231b61a1ce4a48416ae9.png'
                    }}>
                </Image>

              </TouchableHighlight>

            /*******************************/

            <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Next')}>

                <Image
                  style = {styles.back}
                  source = {{uri:'http://illust-kuma.com/kumaimg/batu8.png'}}>
                </Image>

              </TouchableHighlight>






          <Modal
            animationType="slide"
            visible={this.state.photo !== null}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <Image style={{width: "100%", height: "100%" }}
              source={{ uri: this.state.photo === null ? "" : this.state.photo.uri }}/>
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
    bottom:(Dimensions.get('window').height - 80),
    width: 45,
    height: 45,
    borderRadius: 22.5, //丸さ具合
},
    flash: {
    position: 'absolute',
    left: (Dimensions.get('window').width/2-22),
    bottom:(Dimensions.get('window').height - 75),
    width: 40,
    height: 40,
    borderRadius: 20, //丸さ具合
},
    back: {
    position: 'absolute',
    left: (20),
    bottom:(Dimensions.get('window').height - 75),
    width: 40,
    height: 40,
    borderRadius: 20, //丸さ具合
    backgroundColor:'#fff',
},

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
