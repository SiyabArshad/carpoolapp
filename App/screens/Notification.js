import React, { useState ,useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import Color from '../Color';
import { Card,Text as Tt  } from 'react-native-elements';


import Octicons from "react-native-vector-icons/Octicons"
import LoadingScreen from './Loading';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Header from '../components/Header'



const NotificationPage = ({navigation}) => {
  const [isDriver, setIsDriver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  


  useEffect(() => {
    // Load data or assets here
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [isDriver]);

  const [passengerNotification,setPassengerNotification]=useState([
    {   
        id:1,
        Message: 'John has requested to join your carpool activity on 10/04/2023 at 10am.',
        status: "Accepted",
        showbtn: true,
        driver:{
            name: "Jhon",
            phone:"12345676534",
            carNumber:"bxr-123"
        }
    },
    {   
        id:2,
        Message: 'John has requested to join your carpool activity on 10/04/2023 at 10am.',
        status: "Rejected",
        showbtn: true,
        driver:{
            name: "Jhon",
            phone:"12345676534",
            carNumber:"bxr-123"
        }
    },
    {   
      id:3,
      Message: 'John has requested to join your carpool activity on 10/04/2023 at 10am.',
      status: "Waits for driver to respond",
      showbtn: true,
      driver:{
          name: "Jhon",
          phone:"12345676534",
          carNumber:"bxr-123"
      }
  },
])
const [driverNotification,SetDriverNotifcation]=useState([
    {
        id:1,
        eventname:"ABC",
        Message:"Request to join Carpool",
        carNumber:"bdn-183",
        driverName:"Who",
        passenger:{
            name:"wick",
            location:"home",
            destination:"Carpool",
            date: "12/1/23",
            time: "12:00 PM"

        }
    },
    {
        id:2,
        eventname:"XYZ",
        Message:"Request to join Carpool",
        carNumber:"bdn-183",
        driverName:"Who",
        passenger:{
            name:"wick",
            location:"home",
            destination:"Carpool",
            date: "12/1/23",
            time: "12:00 PM"

        }
    },
    {
        id:3,
        eventname:"ABC",
        Message:"Request to join Carpool",
        carNumber:"bdn-183",
        driverName:"Who",
        passenger:{
            name:"wick",
            location:"home",
            destination:"Carpool",
            date: "12/1/23",
            time: "12:00 PM"

        }
    },
    {
        id:4,
        eventname:"ABC",
        Message:"Request to join Carpool",
        carNumber:"bdn-183",
        driverName:"Who",
        passenger:{
            name:"wick",
            location:"home",
            destination:"Carpool",
            date: "12/1/23",
            time: "12:00 PM"

        }
    },
    {
        id:5,
        eventname:"ABC",
        Message:"Request to join Carpool",
        carNumber:"bdn-183",
        driverName:"Who",
        passenger:{
            name:"wick",
            location:"home",
            destination:"Carpool",
            date: "12/1/23",
            time: "12:00 PM"

        }
    },
    {
        id:6,
        eventname:"ABC",
        Message:"Request to join Carpool",
        carNumber:"bdn-183",
        driverName:"Who",
        passenger:{
            name:"wick",
            location:"home",
            destination:"Carpool",
            date: "12/1/23",
            time: "12:00 PM"

        }
    }

]);


  const handleSwitchRole = () => {
    setIsLoading(true);
    setIsDriver(!isDriver);
  };

  const handleAccept = (notificationId) => {
    SetDriverNotifcation((prevNotifications) => {
      return prevNotifications.map((notification) => {
        if (notification.id === notificationId) {
          return { ...notification, Message:"Request Accepted",showbtn:true };
        } else {
          return notification;
        }
      });
    });
  };

  const handleReject = (notificationId) => {
    SetDriverNotifcation((prevNotifications) => {
        return prevNotifications.map((notification) => {
          if (notification.id === notificationId) {
            return { ...notification, Message:"Request Accepted",showbtn:true };
          } else {
            return notification;
          }
        });
      });

  };

  const ShowRequest =(drivnotification)=>{
    const detail = "Name : "+drivnotification.passenger.name + "\nLocation : " + drivnotification.passenger.location +"\nDestination : "+ drivnotification.passenger.destination +"\nDate : "+drivnotification.passenger.date+"\nTime : "+drivnotification.passenger.time
    Alert.alert(drivnotification.Message,detail,[
        {
          text: 'Accept',
          onPress: () => handleAccept(drivnotification.id),
        },
        {text: 'Cancel', onPress: () => handleReject(drivnotification.id),style:"cancel"},
      ]);
  }


  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
    <Header navigate={navigation} />
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{isDriver?"Driver's":"Passenger's"} Notifications</Text>
        <Octicons style={isDriver?[styles.switchicon,styles.driveractive]:styles.switchicon} onPress={handleSwitchRole} name="arrow-switch" size={26} color={Color.secondary} />
      </View>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.notificationList}>
            {
                !isDriver ?passengerNotification.map((passnotification)=>{
                    return(
                      <Card key={passnotification.id} containerStyle={styles.card}>
                            <Tt style={styles.title}>{passnotification.Message}</Tt>
                            <Card.Divider />
                            <Text style={[styles.notificationMessage,passnotification.status === "Accepted"?styles.Acceptedstatus:passnotification.status === "Rejected"?styles.Rejectedstatus:{color:Color.secondary}]}>{passnotification.status}</Text>
                      </Card>                  
                    )
                }):driverNotification.map((drivnotification)=>{
                    return(<Card key={drivnotification.id} containerStyle={styles.card}>
                            <Card.Title style={styles.title}>{drivnotification.Message}</Card.Title>
                            <Card.Divider />
                            <Text style={styles.notificationMessage}>Event Name: {drivnotification.eventname}</Text>
                            <Text style={styles.notificationMessage}>Location: {drivnotification.passenger.location}</Text>
                            <Text style={styles.notificationMessage}>Destination: {drivnotification.passenger.destination}</Text>
                            { !drivnotification.showbtn && <Pressable onPress={()=>{ShowRequest(drivnotification)}} style={styles.button} >
                                <Text style={styles.btntext} >Details</Text>
                            </Pressable>}
                      </Card> )
                })
            }
        </ScrollView>
    </View>
    </>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor:Color.primary
 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchicon:{
    marginRight:15
  },
  driveractive:{
    color:Color.lblue,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 0,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: RFPercentage(2.3),
    color:Color.secondary
  },
  notificationList: {
    flex: 1,
  },
  notification: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  notificationtitle:{
    fontSize: RFPercentage(2.3),
    marginBottom: 10
  },
  notificationMessage: {
    fontSize: RFPercentage(2.3),
    fontWeight:"500",
    marginBottom: 10,
    alignSelf:"center"
  },
  Acceptedstatus:{
    color: "green"
  },
  Rejectedstatus:{
    color: "red"
  },
  button: {
    alignSelf:"flex-end",
    borderWidth:1,
    borderColor:Color.lblue,
    backgroundColor:Color.lblue,
    borderRadius:10
    
},
btntext:{
      color:Color.primary,
      padding:8,
      paddingLeft:12,
      paddingRight:12
  },
  
  }
  )