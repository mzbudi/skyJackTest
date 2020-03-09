import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (text, type) => {
    this.setState(
      {
        [type]: text,
      },
      () => {
        console.log(this.state.username, this.state.password);
      },
    );
  };

  handleLogin = () => {
    const {username, password} = this.state;
    if (username === 'roni' || username === 'Roni') {
      if (password === 'roni' || password === 'Roni') {
        this.props.navigation.navigate('Home');
      }
    }
  };

  render() {
    return (
      <View style={styles.bgView}>
        <Input
          onChangeText={text => {
            this.handleChange(text, 'username');
          }}
          placeholder="Email/Username/Phone Number"
          RightIcon={{type: 'font-awesome', name: 'chevron-left'}}
        />
        <Input
          onChangeText={text => {
            this.handleChange(text, 'password');
          }}
          secureTextEntry
          placeholder="Password"
          RightIcon={{type: 'font-awesome', name: 'chevron-left'}}
        />
        <View style={styles.loginButton}>
          <Button
            onPress={this.handleLogin}
            containerStyle={styles.buttonView}
            title="Login"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  buttonView: {
    marginTop: 16,
    width: 100,
  },
  loginButton: {alignItems: 'center'},
});

export default Login;
