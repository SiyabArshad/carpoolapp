import { StyleSheet,Text, View ,SafeAreaView,StatusBar} from 'react-native'
import React, { useEffect } from 'react'

import Octicons from "react-native-vector-icons/Octicons"
import LoadingScreen from './Loading'


import Color from '../Color'
import PassengerList from '../components/PassengerList';
import DriverList from '../components/DriverList';
import { RFPercentage } from 'react-native-responsive-fontsize'
import Header from '../components/Header'
const CarpoolActivitis = ({navigation}) => {
  const [isDriver, setIsDriver] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  

  React.useEffect(() => {
    // Load data or assets here
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [isDriver]);
  const handleSwitchChange = () => {
    setIsLoading(true);
    setIsDriver(!isDriver);
  };

  
  
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
    <Header navigate={navigation} />
    <View style={styles.activies}>
    <View style={styles.formhead}>
      <Text style={styles.formheading} >{isDriver ? 'Driver' : 'Passenger'}</Text>
      <Octicons style={isDriver?[styles.switchicon,styles.driveractive]:styles.switchicon} onPress={handleSwitchChange} name="arrow-switch" size={26} color={Color.secondary} />

        </View>
    {!isDriver? 
    <PassengerList 
    listevent={
      [{id:1,eventtype:"Current Request"},
      {id:2,eventtype:"Upcomming Events"},
      {id:3,eventtype:"Past Event"}]}  /> 
      : <DriverList 
      listevent={[
        {id:1,eventtype:"Current Open Activity"},
        {id:2,eventtype:"Upcomming Events"},
        {id:3,eventtype:"Past Event"}]}  />}
    </View>
    </>
  )
}



export default CarpoolActivitis

const styles = StyleSheet.create({
  activies:{
    padding:15,
    flex:1,
    backgroundColor:Color.primary
  },
  switchicon:{
    marginRight:15
  },
  driveractive:{
    color:Color.lblue,
  },
  formhead:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:18
  },
  formheading:{
    fontSize:RFPercentage(3.9),
  },
  eventdetail:{
    marginTop:20
  },
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    paddingTop: Platform.OS ==="android"&& StatusBar?.currentHeight ,
  },
})
