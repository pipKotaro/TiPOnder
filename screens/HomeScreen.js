import React from 'react';
import {
 Image,
 Platform,
 ScrollView,
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View,
 Modal,
 TouchableHighlight,
 TouchableWithoutFeedback,

} from 'react-native';
import {
 Container,
 Header,
 Content,
 Card,
 CardItem,
 Thumbnail,
 Button,
 Icon,
 Left,
 Body,
 Right,
 Form,
 Textarea
} from 'native-base';
import { WebBrowser } from 'expo';
import CardFlip from 'react-native-card-flip';

var Dimensions = require('Dimensions');
const questions = [
 {question: "Q参観日これでいい？\n　#参観日", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_Ruwx32hDxrfYEYb0Jvx4Cl6A-f6PiUx0wAdyxtdNeoERLGx", good:90},
 {question: "Q10月の北海道これでいい？\n　#10月　#北海道", image: "http://img4.zozo.jp/fashionnews/107025/master_640_1.jpg", good:80},
 {question: "Q野球観戦これでいいですか？\n　#野球観戦　#Baseball", image: "https://arine.akamaized.net/uploads/photo/external_photo/data/307775/xlarge_348c9101-ae88-4c23-bbe5-2bbb2bece8bf.jpg", good:70},
]

export default class HomeScreen extends React.Component {
 static navigationOptions = {
   header: null,
 };
   state = {
     isSkip:false,
     modalVisible: false,
     questions:questions,
     count:0,
     isShow:false,
     isReverse:false
   };
   setModalVisible(visible) {
     this.setState({modalVisible: visible});
   }

 render() {
   var {height, width} = Dimensions.get('window');
   var DismissKeyboard = require('dismissKeyboard');
   let buttons=  <View style={{
                    flex:1,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems: 'center',

                   }} >

     <Button danger onPress={()=>{this._handleJudgmentPress("NO")}} style={{ shadowOffset:{  width: 1,  height: 3,  },shadowColor: '#ADADAD',shadowOpacity:3,flex: 2,margin:8,backgroundColor:'#78A5A3',height:50,borderRadius: 40  }}><Text> No </Text></Button>
     <Button style={{ flex: 1,marginTop:8,borderRadius: 30,height:50,width:50 }} onPress={()=>{this.card.flip(),this.setState({isReverse:!this.stateisReverse})}}><Text style={{alignItems:'center'}}>Com</Text></Button>
     <Button primary onPress={()=>{this._handleJudgmentPress("YES")}}  style={{shadowOffset:{  width: 1,  height: 3,  },shadowColor: '#ADADAD',shadowOpacity:3, flex: 2,margin:8,backgroundColor:'#CE5A57',height:50,borderRadius: 40  }}><Text> Yes </Text></Button>
     </View>
    let judge= <View style={{
                   flex:1,
                   flexDirection:'row',
                   justifyContent:'space-around',
                   borderRadius:20


                  }} >

                    <View style={{flex:100-this.state.questions[this.state.count].good,height:20,backgroundColor:'#78A5A3'}}>
                        <Text>NO</Text>
                    </View>
                    <View style={{flex:this.state.questions[this.state.count].good,height:20,backgroundColor:'#CE5A57'}}>
                        <Text>YES</Text>
                    </View>
       </View>
   return (
     <Container>
         <Header />

         <CardFlip style={{flex:1}} ref={(card) => this.card = card} >
        <TouchableWithoutFeedback style={{flex:1}} onPress={this._onPressButton}>
        <View style={{flex:1}}>
          <View style={{flex:8,margin:8}}>
          <Image source={{uri:this.state.questions[this.state.count].image}}resizeMode='cover' style={{flex:8,width: null, borderRadius: 20}}/>
          <View style={{height:70,top:-90,justifyContent:'center'}}>
          <Text style={styles.TextShadowStyle}>
            {this.state.questions[this.state.count].question }
             </Text>
          </View>
             </View>


         <View style={{top:-70}}>
          {this.state.isSkip?judge:buttons}

         </View>

         </View>
         </TouchableWithoutFeedback >
         <TouchableWithoutFeedback style={{}} onPress={() => DismissKeyboard()} >
         <View>
          <Button
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
             this.card.flip();
             this.setState({isReverse:!this.state.isReverse})}}>
            <Text　style={{textAlign: 'right',fontSize: 20,color:'black'}}>投稿</Text>
          </Button>
          <View style={{marginTop: 22}}>
            <Text style={styles.TextCommentStyle}>
              {this.state.questions[this.state.count].question }
               </Text>
               <View style={{flex:1,flexDirection:'row',justifyContent: 'center'}}>
                 <Image source={{uri:this.state.questions[this.state.count].image}} resizeMode='contain' style={{height:100,width:100,flex:1, borderRadius: 20}}/>
                  {this.state.isReverse?<TextInput style={{height:300,flex:1, borderRadius: 20}} multiline={true} maxLength = {140} keyboardType='default' returnKeyType='default' autoFocus={true} placeholder="hoge"/>:<View></View>}

              </View>
          </View>
          </View>
          </TouchableWithoutFeedback>


        </CardFlip>
       </Container>
   );
 }
  _onPressButton=()=>{
  if(this.state.isSkip==true){
    this.setState({isShow:false})
    this.setState({isSkip:false})



    if(this.state.questions.length - 1  <= this.state.count ){
     // stateのcountを0に設定
     this.setState({count: 0})
     console.log("clear!")
     return
   }
   //　 stateのcountにプラス1する
   // Reactはコンストラクタ以外でステートを変更するとき，setStateメソッドをを使って変更する必要があります
   // Reactではステートが更新される時に変更があったDOMが　再レンダリングされるためです
   this.setState({count: this.state.count + 1})
   console.log(this.state.count)
 }
 }
 // Yes or No を押した時に動作するメソッド
 _handleJudgmentPress = ( judgment ) => {

  this.setState({isSkip:true})
  this.setState({isShow:true})





 };


 }

 const styles = StyleSheet.create({
   TextShadowStyle:
   {
      textAlign: 'left',
      fontSize: 20,
      color:'white',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 3 },
      textShadowRadius: 3,


   },
   TextCommentStyle:
   {
     textAlign: 'left',
     fontSize: 20,
     color:'black',


   }

 });
