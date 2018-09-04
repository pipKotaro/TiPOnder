import React, { Component } from 'react';

import { Platform, StatusBar, StyleSheet, View,Text,FlatList } from 'react-native';

export default class PostImagine extends Component {

render(){
  return(
<View >
    <FlatList
      numColumns={4}
      data={[{key: 'camera'}, {key: 'b'},{key: 'c'},{key: 'd'},{key: 'e'},{key: 'f'},{key: 'g'},{key: 'h'}]}
      renderItem={({item}) => <Text style={{ padding: 10, backgroundColor: 'green',margin: 5,width: 80, height: 80}}>{item.key}</Text>}
    />
</View>
  );
}
}
