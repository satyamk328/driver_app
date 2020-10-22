import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Button,Text, ImageBackground } from 'react-native'
const windowHeight = Dimensions.get('window').height;


export default class ManageSignUp extends Component {

  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  async onLogin() {
    this.props.navigation.navigate('Login');
  }

  async onSignUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
    
        <View style={styles.container}>
          <ImageBackground style={styles.imgBackground}>
            <View style={styles.buttonContainer}>
              <Button title="Login"  onPress={() => this.onLogin()}></Button>
            </View>
            <View style={styles.buttonContainer}>
            <Button title="SignUp"  onPress={() => this.onSignUp()}></Button>
            </View>
            
            </ImageBackground>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    marginBottom:0,
    marginLeft:20,
    marginRight:20
   // marginTop: windowHeight / 4
  }, 
  btn: {
    color: 'yellow',
    backgroundColor: 'yellow'
  }
})