import React, { Component } from 'react'
import { View, Button, StyleSheet ,Text} from 'react-native'

export default class index extends Component {

  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  async onLogin() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.base}>
        <Text>Sign Up Page</Text>
        <Button
          title='SignUp'
          onPress={this.onLogin}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
