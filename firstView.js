import * as React from 'react';
import { Image, View, StyleSheet,TouchableWithoutFeedback,Alert} from 'react-native';
import { Constants } from 'expo';


export default class App extends React.Component {
  render() {
    return (
        <TouchableWithoutFeedback style={{flex:1}} onPress={() => this.props.navigation.navigate('RouteNameTwo')}>



           <Image source={{uri:'https://i.gyazo.com/1e221d683c11b25f9c4be8cd26c5defe.png'}} style={{flex:1}} />


      </TouchableWithoutFeedback >
         );
  }
}
