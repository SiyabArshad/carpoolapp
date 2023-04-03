import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Pressable } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Color from "../Color"

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  

  const HandlePassword = () => {
    // Handle signup logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Forgot Password</Text>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      
      <TouchableOpacity style={styles.signupBtn} onPress={HandlePassword}>
        <Text style={styles.signupText}>Recover</Text>
      </TouchableOpacity>
      <Pressable style={styles.loginbtn} >
        <Text style={{fontSize:RFPercentage(2)}} >Remember Your Password? <Text onPress={()=>{navigation.navigate("login")}} style={styles.loginText} >Login </Text></Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: RFPercentage(4.8),
    color: Color.lblue,
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 10,
  },
  inputText: {
    height: 50,
    color: '#003f5c',
  },
  signupBtn: {
    width: '80%',
    backgroundColor: Color.secondary,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 10,
  },
  signupText: {
    color: Color.primary,
    fontSize:RFPercentage(2)
  },
  loginText:{
    color:Color.lblue,
    fontWeight:"500"
  }
});

export default SignupScreen;