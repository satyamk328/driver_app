import React, { Component } from 'react'
import { View, Button, StyleSheet ,Text} from 'react-native'

export default class index extends Component {

  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  async onLogin() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.base}>
        <Text>Login Page</Text>
        <Button
          title='Login'
          onPress={this.onLogin}/>
          <Button
        title="Go to Password Forget"
        onPress={() => this.props.navigation.navigate('Forgot Password')}
      />
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
