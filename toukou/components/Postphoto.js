import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View,
        Text,FlatList,Alert,CameraRoll,Image,ScrollView,
        TouchableHighlight} from 'react-native';
import camera from '../image/camera.png';

export default class Postphoto extends Component {

 constructor(){
   super()
   this.state = {
     imageuri:'',
     // ここに画像のURIを保持するようの変数を書く
     photos:new Array({key:'camera'})
   }
 }
  componentDidMount(){
    CameraRoll.getPhotos({ //カメラロールの画像を取得
      first: 9999,
      assetType: 'Photos',
    })
    .then(r => {
      intialState = this.state.photos//初期値

      this.setState({ photos: intialState.concat(r.edges)});
      this.setState({ imageuri: r.edges[0].node.image.uri}); //保存し直す
      // ここで１個めの画像のURIを、上で作った変数に突っ込む
    })
    .catch((err) => {
       //Error Loading Images
    });
  }

  static navigationOptions = {
          header: null,
      }



render(){

  return(

    <View style={{flex: 1}}>
      <Image style={{ padding: 5, backgroundColor: 'green',margin: 2,flex: 1}}
      source={{uri : this.state.imageuri}}>
      </Image>



    <FlatList
    style={{height:600}}
      numColumns={4}
      data={this.state.photos}
      extraData={this.state.photos}
      renderItem={
        ({item, i}) => {
          if(item.key == 'camera'){
            return <TouchableHighlight key={i} onPress={()=>{
              Alert.alert(
                'Alert Title',
                '林の画面に移動',
                [
                  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
            }
            }

            >
            <Image style={{ padding: 5,margin: 7,width: 80, height: 80}}
                     source={camera}>
                     </Image>
                     </TouchableHighlight>

          }
          return <TouchableHighlight key={i} onPress={()=>{
            this.setState({ imageuri: item.node.image.uri});

            // ここで画像のURIを上で作った変数にいれる
            // 画像のURIは item.node.image.uri
          }}>
          <Image style={{margin: 2,width: 90, height: 90}}//画像を表示
          source={{uri : item.node.image.uri}}>
          </Image>
          </TouchableHighlight>
        }

      }
    />
</View>
  );
}
}
