import { StyleSheet, Text, View ,FlatList, Pressable,Animated, Alert} from 'react-native'
import React from 'react'
import { Card,   Image,  Avatar} from 'react-native-elements';

import Color from '../Color';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useIsFocused } from '@react-navigation/native';


const CurrentOpenActivtiy = () => {
    const UpcomingEvents = [
        {
            id:1,
            title: "Carpool Event Z Created",
            message:"Wait for passenger to join the event",
            date: "12/2/24",
            img: require("../../assets/user4.jpg"),

            time:"1:00 PM",
            details:{
                destination:"where",
                passanger:12,
                carNumber:"bxr-123"
            }
        },
        
    ]

    const ShowDetail =(data)=>{
      const detail = `Pickup: President Road${'\n'}DropOff: President Road${'\n'}Date: April 4 2023${'\n'}Time: 3:00PM`  
      Alert.alert("Events Detail",detail,[
            {
              text: 'Ok',
              onPress: () => console.log("Ok"),
            },
            ]);
      }
      const DeleteDetail =(data)=>{
        Alert.alert("Delete Request","Are you sure you want to delete this Pool",[
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Delete', onPress: () => console.log('DELETE Pressed')},
        ]);
      }
      // Create a reference to the list's Animated.View component
 const animatedList = React.useRef(new Animated.Value(0)).current;
 const isFocused = useIsFocused();  
 // Define the animation configuration
 const animationConfig = {
   toValue: 1,
   duration: 500,
   useNativeDriver: true,
 };
 const startAnimation = () => {
  animatedList.setValue(0); // Reset the animation value
  Animated.timing(animatedList, animationConfig).start();
};

 // Trigger the animation when the component mounts
 React.useEffect(() => {
if(isFocused)
{
  startAnimation()
}  
}, [isFocused]);
      const renderItem = ({ item }) => (
        <Animated.View style={{ opacity: animatedList, transform: [{ translateY: animatedList.interpolate({
          inputRange: [0, 1],
          outputRange: [200, 0],
        }), },], }}>
        <Card containerStyle={styles.card}>
      <View style={styles.imageContainer}>
      <Avatar
                source={item.img}
                rounded
                size={100}
        />
      </View>
      <Card.Title style={styles.title}>{item.title}</Card.Title>
      <Card.Divider />
      <Text style={styles.text}>
        {item.message} {item.date} 
      </Text>
      <Text style={styles.text}>No of Passenger joined: {item.details.passanger}</Text>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
        <Pressable onPress={()=>{ShowDetail(item)}} style={styles.button} >
        <Text style={styles.btntext} >Details</Text>
      </Pressable>
      <Pressable onPress={()=>{DeleteDetail(item)}} style={[styles.button,{marginLeft:10,backgroundColor:"red"}]} >
        <Text style={styles.btntext} >Delete</Text>
      </Pressable>
        </View>
      </Card>
      </Animated.View>
      );


  return (
    <View>
    <FlatList 
      showsVerticalScrollIndicator={false}
        data={UpcomingEvents}
        renderItem={renderItem}
      />
  </View>
  )
}

export default CurrentOpenActivtiy

const styles = StyleSheet.create({
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
      imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
      },
      image: {
        width: 200,
        height: 90,
        resizeMode:"stretch",
      },
      title: {
        fontSize: RFPercentage(3.2),
        fontWeight: 'bold',
        color:Color.secondary,
        marginTop: 20,
      },
      text: {
        fontSize: RFPercentage(2.3),
        marginTop: 10,
        color:Color.secondary
      },
      button: {
        alignSelf:"flex-end",
        backgroundColor:Color.lblue,
        borderRadius:10,
        marginTop:5,
        elevation:7
        
    },
    btntext:{
          color:Color.primary,
          padding:8,
          paddingLeft:12,
          paddingRight:12
      }
})