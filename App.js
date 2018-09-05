import { View, Modal, Image, CameraRoll,TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Fab ,Icon} from 'native-base';
//fabで円のアクション系を書く


export default class CameraView extends React.Component {
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


                  <Fab
                     active={this.state.active}
                     direction="up"
                     containerStyle={{ }}
                     style={{ backgroundColor: '#5067FF' }}
                     position="bottomRight"
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
                     <Icon name="share" />
                     <Button style={{ flex: 1 ,marginbottom: 30,}} title="snap!"  />
                   </Fab>

                   <Fab
                      active={this.state.active}
                      direction="up"
                      containerStyle={{ }}
                      style={{ backgroundColor: '#a9f43e' }}
                      position="bottomLeft"
                      onPress={photo => {
                        this.setState({
                          type: this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                          });
                      }}>
                      <Icon name="share" />
                      <Button style={{ flex: 1 ,marginbottom: 30,}} title="snap!"  />
                    </Fab>


                    <Fab
                       active={this.state.flashMode}
                       direction="up"
                       containerStyle={{ }}
                       style={{ backgroundColor: '#f0e94f' }}
                       position="topLeft"
                       onPress={photo => {
                         this.setState({
                           flashMode: this.state.flashMode == Camera.Constants.FlashMode.off
                           ? Camera.Constants.FlashMode.on
                           : Camera.Constants.FlashMode.off,
                           });
                       }}>
                       <Icon name="share" />
                       <Button style={{ flex: 1 ,marginbottom: 30,}} title="snap!"  />
                     </Fab>



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
