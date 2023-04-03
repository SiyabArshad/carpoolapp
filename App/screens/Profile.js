import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity ,TextInput, Alert } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import Feather from "react-native-vector-icons/Feather"
import Fontisto from "react-native-vector-icons/Fontisto"

import Color from '../Color';
import LoadingScreen from './Loading';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Header from '../components/Header'

const UserProfile = ({navigation}) => {
  const [profilePic, setProfilePic] = useState(require('../../assets/user4.jpg'));
  const [name, setName] = useState('John Doe');
  const [phone, setPhone] = useState('123-456-7890');
  const [email, setEmail] = useState('johndoe@email.com');
  const [role,setRole] = useState("Driver");
  const [editing, setEditing] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  
  useEffect(() => {
    // Load data or assets here
    if(logoutLoading){
      setTimeout(() => {
        navigation.navigate("login")
        setLogoutLoading(false);
      }, 2000);

    }
  }, [logoutLoading]);
  
  useEffect(() => {
    // Load data or assets here
    if(saveLoading){
      setTimeout(() => {
        setEditing(false);
        setSaveLoading(false);
      }, 2000);

    }
  }, [saveLoading]);

  if (logoutLoading || saveLoading) {
    return <LoadingScreen />;
  }

  const handleEditPress = () => {
    setEditing(true);
  };

  const handleLogout=()=>{
      Alert.alert("Log Out","Are You Sure?",[
        {
          text:"Yes",
          onPress:()=>{
            setLogoutLoading(true)
          },
          
        },
        {
          text:"No",
        }
      ])
  }

  const handleSavePress = () => {
    // setEditing(false);
    Alert.alert("Confirm!","",[
      {
        text:"Yes",
        onPress:()=>{
          setSaveLoading(true)
        },
        
      },
      {
        text:"No",
      }
    ])
  };

  const handleCancelPress = () => {
    setEditing(false);
  };

  const handleProfilePicPress = async () => {
    const result = await launchImageLibrary(
      {
        mediaTypes: 'photo',
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      }
    );
    if (!result.canceled) {
      setProfilePic({ uri: result.assets[0].uri });
    }
  };

  return (
    <>
    <Header navigate={navigation} />
    <View style={styles.container}>
      {editing ? (
        <>
          <TouchableOpacity onPress={handleProfilePicPress}>
        <Image
          resizeMode='cover'
          source={profilePic}
          style={styles.profilePic}
        />
      </TouchableOpacity>
        <View style={styles.editinput} >
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone number"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            value={role}
            onChangeText={setRole}
            placeholder="Driver or Pessenger"
          />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSavePress}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCancelPress}>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
        <Image source={profilePic} style={styles.profilePic} />
        <View style={styles.infoview}>
          <View style={[styles.info,{marginTop:1}]}>
          <Text ><Feather name="user" size={RFPercentage(3.5)} color={Color.secondary} /> </Text>
          <Text ><Feather name="phone" size={RFPercentage(3.5)} color={Color.secondary} /></Text>
          <Text > <Fontisto name="email" size={RFPercentage(3.5)} color={Color.secondary} /> </Text>
          <Text ><Feather name="users" size={RFPercentage(3.5)} color={Color.secondary} /> </Text>
          </View>
          <View style={styles.info}>
          <Text style={styles.name} >{name}</Text>
          <Text style={styles.subdetail} >{phone}</Text>
          <Text style={styles.subdetail} >{email}</Text>
          <Text style={styles.subdetail}>{role}</Text>
          </View>
          </View>
          <TouchableOpacity style={styles.editbutton} onPress={handleEditPress}>
            <Feather name="edit" size={RFPercentage(3.3)} color="white" />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.editbutton,{bottom:100}]} onPress={handleLogout} >
            <Feather name="log-out" size={RFPercentage(3.3)} color="white" />
    </TouchableOpacity>
        </>
      )}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor:Color.primary
  },
  profilePic: {
    alignSelf:"center",
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth:1,
    borderColor: Color.secondary
  },
  editinput:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
    marginBottom:20
  }
  ,
  infoview:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:20,
    marginBottom:20
  },
  name: {
    fontSize: RFPercentage(2.8),
    fontWeight: 'bold',
    // marginBottom: 10,
  },
  subdetail:{
    color:Color.secondary,
    fontSize:RFPercentage(2.4)
  }
  ,
  info: {
    fontSize: RFPercentage(2.3),
    justifyContent:"space-between",
    height:150,
    alignItems:"center"
  },
  input: {
    borderWidth: 1,
    borderColor: Color.secondary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  button:{
    marginTop:14,
    alignItems: 'center',
  justifyContent: 'center',
  width:"80%",
  alignSelf:"center",
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 10,
  elevation: 3,
  backgroundColor: Color.secondary,
  },
  editbutton:{
    position:"absolute",
    bottom:30,
    right:20,
    marginTop:14,
    borderWidth:1,
    borderRadius:80,
    height:60,
    width:60,
    alignItems: 'center',
  justifyContent: 'center',
  elevation: 3,
  backgroundColor: Color.secondary,
  },
  btnText:{
    fontSize: RFPercentage(2.3),
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Color.primary,
  }
});

export default UserProfile;