import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Pressable, ScrollView } from 'react-native';

import Color from "../Color"
import { RFPercentage } from 'react-native-responsive-fontsize';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic
  };

  return (
    <ScrollView  style={{backgroundColor:Color.primary}} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
      <Pressable style={styles.loginbtn} >
        <Text style={{fontSize:RFPercentage(2),color:Color.secondary}} >Already have an Account? <Text onPress={()=>{navigation.navigate("login")}} style={styles.loginText} >Login </Text></Text>
      </Pressable>
    </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    alignItems: 'center',
    paddingTop:150,
    paddingBottom:30
  },
  logo: {
    fontWeight: 'bold',
    fontSize: RFPercentage(7),
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
  },
  loginText:{
    color:Color.lblue,
    fontWeight:"500"
  }
});

export default SignupScreen;