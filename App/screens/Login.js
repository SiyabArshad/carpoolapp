import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Color from '../Color';
import LoadingScreen from './Loading';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);
 
  const handleLogin = () => {
    setLoading(true)
      setTimeout(() => {
        navigation.navigate("carpoolform")
        setLoading(false)
      }, 2000);

    // Handle login logic
  };
if(Loading)
{
  return <LoadingScreen/>;
}
  return (
  <ScrollView style={{backgroundColor:Color.primary}} showsVerticalScrollIndicator={false} > 
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
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
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Pressable onPress={()=>{navigation.navigate("forget")}} style={styles.forgetPass} >
        <Text style={styles.foretText}>forget Password?</Text>
      </Pressable>
      <Pressable style={styles.signupBtn} >
        <Text style={styles.signupText} >Are You New Here? <Text onPress={()=>{navigation.navigate("signup")}} style={styles.subsignupText} >Sign Up </Text></Text>
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
    justifyContent: 'center',
    marginBottom:15
  },
  logo: {
    marginTop:170,
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
      height: 6,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 12,
  },
  inputText: {
    height: 50,
    color: '#003f5c',
  },
  loginBtn: {
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
    elevation: 17,
  },
  loginText: {
    fontSize: RFPercentage(2),
    color: Color.primary,
  },
  forgetPass:{
    marginTop:1
  },
  foretText:{
    color: Color.lblue,
    fontSize:RFPercentage(2),
    fontWeight:"500"
  },
  signupBtn:{
    marginTop:108,
    fontSize:RFPercentage(2)
  },
  signupText:{
    color:Color.secondary,
  },
  subsignupText:{
    color:Color.lblue,
    fontWeight:"500"

  }

});

export default Login;