import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, Button
} from 'react-native';

import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [ showPw, setShowPw] = useState (true);
  function changeStatus () {
    setShowPw (!showPw)
  }

  return (
    <View style={styles.loginWrapper}>
      <TouchableOpacity style={styles.loginBack}>
        <Text style={styles.textItem}>
          <Icon name="chevron-left" size={20} color="black" /> BACK
        </Text>
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={require('../assets/images/login.png')}
      />
      <Text style={styles.title}>LOGIN</Text>

      <Text style={styles.textItem}>User name</Text>
      <View style={styles.loginInput}>
        <TextInput
          style={styles.textInput}
          placeholder="NguyenThaoNguyen"
          placeholderTextColor="#BEBEBE"
        />

        <Icon name="user" size={20} color="black" />
      </View>

      <Text style={styles.textItem}>Password</Text>
      <View style={styles.loginInput}>
        <TextInput
          style={styles.textInput}
          secureTextEntry = {showPw}
          placeholder="Enter your password"
          placeholderTextColor="#BEBEBE"
          returnKeyType="go"
          autoCorrect={false}
        />
        <Icon onPress={changeStatus} name="eye-slash" size={20} color="black" />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  loginWrapper: {
    padding: 50,
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
  },

  title: {
    fontWeight: '700',
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginBottom: 50,
  },

  textItem: {
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },

  loginInput: {
    width: 300,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: '#C0C0C0',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  loginBtn: {
    borderRadius: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: 'black',
    cursor: 'pointer',
  },

  loginText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  forgot_button: {
    height: 30,
    marginTop: 20,
    textAlign:'center'
  },
});
