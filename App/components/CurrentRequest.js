import { StyleSheet, Text, View ,FlatList, Pressable, Alert,Animated} from 'react-native'
import { Card,   Image,  } from 'react-native-elements';

import * as React from 'react'
import Color from '../Color';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useIsFocused } from '@react-navigation/native';
const CurrentRequest = () => {

    const data = [
        { id: '1', title: 'Carpool Event A',message:"Your Request sent to driver for joining Carpool" ,driver:{
            name: "Jhon",
            phone:"12345676534",
            carNumber:"bxr-123"
        } },
        { id: '2', title: 'Carpool Event A',message:"Your Request sent to driver for joining Carpool", driver:{
            name: "Jhon",
            phone:"12345676534",
            carNumber:"bxr-123"
        }},
        { id: '3', title: 'Carpool Event A' ,message:"Your Request sent to driver for joining Carpool" ,driver:{
            name: "Jhon",
            phone:"12345676534",
            carNumber:"bxr-123"
        } }
    ];
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
    const ShowDetail =(data)=>{
        const detail = `Name: Ahmed ${'\n'}Pickup: President Road${'\n'}DropOff: President Road${'\n'}Date: April 4 2023${'\n'}Time: 3:00PM` 
        Alert.alert("Driver Detail",detail,[
            {
              text: 'OK',
            //   onPress: () => handleAccept(),
            },
            ]);
      }
      const DeleteDetail =(data)=>{
        Alert.alert("Delete Request","Are you sure you want to delete request from Ahmed",[
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Delete', onPress: () => console.log('DELETE Pressed')},
        ]);
      }
      
      const renderItem = ({ item }) => (
        <Animated.View style={{ opacity: animatedList, transform: [{ translateY: animatedList.interpolate({
          inputRange: [0, 1],
          outputRange: [200, 0],
        }), },], }}>
        <Card containerStyle={styles.card}>
      <Card.Title style={styles.title}>Request From Ahmed</Card.Title>
      <Card.Divider />
      <View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:5}}>
          <Text style={{fontWeight:"bold"}}>Location</Text>
          <Text>Preseident Road North east</Text>
        </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:5}}>
          <Text style={{fontWeight:"bold"}}>Destination</Text>
          <Text>Preseident Road North east</Text>
        </View>
      </View>
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
          data={[1,2,3,4,5]}
          renderItem={renderItem}
        />
    </View>
  )
}

export default CurrentRequest

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
      
      title: {
        fontSize: RFPercentage(2.4),
        color:Color.secondary,
        marginTop: 4,
        fontWeight:"400"
      },
      text: {
        fontSize: RFPercentage(2.3),
        marginTop: 10,
        marginBottom: 20,
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