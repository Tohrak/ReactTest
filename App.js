import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';


export default class App extends React.Component {
  render() {
    let pic = {
      uri: "https://steamcdn-a.akamaihd.net/steam/subs/54029/header_586x192.jpg?t=1544227353"
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={styles.firstImg}/>
        <View style={styles.textZone}>
          <Text>My first application</Text>
          <Welcome name='TorAk' />
        </View>
      </View>
    /*  <View style={{flex: 1}}>
        <View style={{flex: 3, backgroundColor: 'powderblue'}} />
        <View style={{flex: 6, backgroundColor: 'skyblue'}} />
        <View style={{flex: 9, backgroundColor: 'steelblue'}} />
      </View>*/
    );
  }
}

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
  container: {
    flex: 1,
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
