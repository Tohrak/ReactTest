import React from 'react';
//import Demofile from 'demofile';
import { Alert, Button, ScrollView, StyleSheet, Text,TextInput, View, AppRegistry, Image } from 'react-native';


export default class App extends React.Component {
  render() {
    let pic = {
      uri: "https://steamcdn-a.akamaihd.net/steam/subs/54029/header_586x192.jpg?t=1544227353"
    };
    return (
      //Page principale
      <View style={{flex: 1}}>

        //Bandeau haut
        <View style={styles.bandeau}>
          <View style={styles.textZone}>
            //<Text> Bandeau Haut</Text>
          </View>
        </View>

        //Container centrale
        <View style={styles.container}>
          <ScrollView>
            <Image source={pic} style={styles.firstImg}/>
            <Image source={pic} style={styles.firstImg}/>
            <Image source={pic} style={styles.firstImg}/>
            <View style={styles.textZone}>
              /*<Text>My first application</Text>
              <Welcome name='TorAk' />
              <UsernameInput/>*/
            </View>
            <Image source={pic} style={styles.firstImg}/>
            <Image source={pic} style={styles.firstImg}/>
            <Image source={pic} style={styles.firstImg}/>
          </ScrollView>
        </View>

        //Bandeau bas
        <View style={styles.bandeau}>
          <View style={styles.textZone}>
            //<Text> Bandeau Bas </Text>
          </View>
        </View>


      </View>
      /**/
    );
  }
}

//Renvoie un textinput ainsi qu'un boutton
class UsernameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onPressButton(){
    Alert.alert('Username send, please wait !');
  }

  render(){
    return(
      <View style={{padding: 5}}>
          <TextInput
            style={{height: 20}}
            placeholder="Enter username to check !"
            onChangeText={(text) => this.setState({text})}
          />
          <View style={styles.buttonContainer}>
            <Button
              onPress = {this._onPressButton}
              title="Send username"
            />
          </View>
      </View>
    )
  }
}

//Renvoie une chaine de charactère comprenant la chaîne de caractère
//donnée en param
class Welcome extends React.Component{
  constructor(props){
    super(props);
    this.state = { boolText: true };

    //Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        {boolText : !previousState.boolText}
      ))
    ), 1000);
  }
  render(){
    if(!this.state.boolText){
      return(
        <Text style={styles.nameBlue}> Hello {this.props.name} !</Text>
      )
    }
    return(
      <Text style={styles.nameRed}> Hello {this.props.name} !</Text>
    );
  }
}

const styles = StyleSheet.create({
  bandeau: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  container: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textZone:{
    alignItems:'center',
  },
  firstImg: {
    height: 100,
    alignItems: 'stretch',
  },
  nameBlue: {
    color: 'blue',
    fontWeight: 'bold'
  },
  nameRed: {
    color: 'red',
    fontWeight: 'bold'
  },
});
