import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, StatusBar,Pressable, TouchableOpacity } from 'react-native';
import Color from '../Color';
import LoadingScreen from './Loading';

import Octicons from "react-native-vector-icons/Octicons"
import Fontisto from "react-native-vector-icons/Fontisto"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { RFPercentage } from 'react-native-responsive-fontsize';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SuggestionList from '../components/SuggestionList';
import Header from '../components/Header'

const CarpoolForm = ({navigation}) => {
  const [isDriver, setIsDriver] = useState(false);
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [seatsAvailable, setSeatsAvailable] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [locinput, setlocinput] = useState(false);
  const [desinput, setdesinput] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const tempdate=new Date(date).toDateString()
    setDate(tempdate)
    hideDatePicker();
  };
  const handleConfirm2 = (date) => {
    const temptime=new Date(date).toTimeString()
    setTime(temptime)
    hideTimePicker();
  };
  useEffect(() => {
    // Load data or assets here
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [isDriver]);

  const handleSwitchChange = () => {
    setIsLoading(true);
    setIsDriver(!isDriver);
  };

  const handleSubmit = () => {
    // Logic for creating carpool request based on user role
    if (isDriver) {
      // Handle driver form submission
    } else {
      // Handle passenger form submission
    }
  };
  const handleloc=(state)=>{
    setLocation(state)
    setlocinput(!locinput)
  }  
  const handledes=(state)=>{
    setDestination(state)
    setdesinput(!desinput)
  }  

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
    <Header navigate={navigation} />
    <View style={Styles.form} >
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm2}
        onCancel={hideTimePicker}
      />
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
    <View style={Styles.formhead}>
      <Text style={Styles.formheading} >{isDriver ? 'Driver' : 'Passenger'}</Text>
      <Octicons style={isDriver?[Styles.switchicon,Styles.driveractive]:Styles.switchicon} onPress={handleSwitchChange} name="arrow-switch" size={26} color={Color.secondary} />
        </View>
      <Text style={Styles.label}>Location <Octicons name="location" size={RFPercentage(2.5)} color={Color.secondary} /></Text>
      <TextInput placeholder='Location' cursorColor={Color.grey} style={Styles.input} value={location} onChangeText={setLocation} />
      {
        location.length!=0&&!locinput&&
        <SuggestionList loc={handleloc}/>
      }
      <Text style={Styles.label} >Destination <Octicons name="location" size={RFPercentage(2.5)} color={Color.secondary} /></Text>
      <TextInput placeholder='Destination' cursorColor={Color.grey} style={Styles.input} value={destination} onChangeText={setDestination} />
      {
        destination.length!=0&&!desinput&&
        <SuggestionList loc={handledes}/>
      }
      <TouchableOpacity onPress={showDatePicker}><Text style={Styles.label} >Date <Fontisto name="date" size={RFPercentage(2.5)} color={Color.secondary} /> </Text></TouchableOpacity> 
      <View style={Styles.input}>
      <Text>{date!==null||undefined?date:""}</Text>
      </View>
      <TouchableOpacity onPress={showTimePicker}><Text style={Styles.label} >Time <Fontisto name="clock" size={RFPercentage(2.5)} color={Color.secondary} /></Text></TouchableOpacity>
      <View style={Styles.input}>
      <Text>{time!==null||undefined?time:""}</Text>
      </View>
      {isDriver && (
        <View>
          <Text style={Styles.label} >Seats Available <MaterialCommunityIcons name="car-seat" size={RFPercentage(2.5)} color={Color.secondary} /></Text>
          <TextInput
            style={Styles.input}
            value={seatsAvailable}
            onChangeText={setSeatsAvailable}
            keyboardType="numeric"
            cursorColor={Color.grey}
          />
        </View>
      )}
      <Pressable style={Styles.button} onPress={handleSubmit}>
      <Text style={Styles.btnText}>SUBMIT</Text>
    </Pressable>
      </ScrollView>
    </View>
    </>
  );
};

export default CarpoolForm;

const Styles = StyleSheet.create({
    form:{
        flex:1,
        padding:15,
        backgroundColor: Color.primary,
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
    switchicon:{
      marginRight:15
    },
    driveractive:{
      color:Color.lblu
    },
    label:{
      color:Color.secondary,
      fontSize:RFPercentage(2.5),
      marginBottom:10
    },
    input:{
      borderColor:Color.grey,
      borderWidth:1,
      height:40,
      borderRadius:10,
      display:"flex",
      justifyContent:"center",alignItems:"flex-start",
      paddingLeft:10,
      marginBottom:10
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
    btnText:{
      fontSize: RFPercentage(2.3),
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: Color.primary,
    }
,container: {
  flex: 1,
  backgroundColor: Color.primary,
  paddingTop: Platform.OS ==="android"&& StatusBar.currentHeight ,
},

})