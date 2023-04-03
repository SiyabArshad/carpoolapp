import { StyleSheet, Text, View ,FlatList, Pressable,Animated, Alert} from 'react-native'
import * as React from 'react'
import { Card,   Image, Avatar } from 'react-native-elements';
import Color from "../Color" 
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useIsFocused } from '@react-navigation/native';
const DriverUpcomingEvents = () => {
    const UpcomingEvents = [
        {
            id:1,
            title: "Carpool Evnet Y",
            message:"All the passenger confirmed ,Trip will be start on",
            date: "12/2/24",
            time:"1:00 PM",
            img: require("../../assets/user4.jpg"),
            details:{
                destination:"where",
                passanger:12,
                carNumber:"bxr-123"
            }
        },
        {
            id:2,
            title: "Carpool Evnet Y",
            message:"All the passenger confirmed ,Trip will be start on",
            date: "12/2/24",
            time:"1:00 PM",
            img: require("../../assets/user4.jpg"),
            details:{
                destination:"where",
                passanger:12,
                carNumber:"bxr-123"
            }
        },
        {
            id:3,
            title: "Carpool Evnet Y",
            message:"All the passenger confirmed ,Trip will be start on",
            date: "12/2/24",
            time:"1:00 PM",
            img: require("../../assets/user4.jpg"),
            details:{
                destination:"where",
                passanger:12,
                carNumber:"bxr-123"
            }
        },

        {
            id:4,
            title: "Carpool Evnet Y",
            message:"All the passenger confirmed ,Trip will be start on",
            date: "12/2/24",
            img: require("../../assets/user4.jpg"),
            time:"1:00 PM",
            details:{
                destination:"where",
                passanger:12,
                carNumber:"bxr-123"
            }
        },
        {
            id:5,
            title: "Carpool Evnet Y",
            message:"All the passenger confirmed ,Trip will be start on",
            date: "12/2/24",
            time:"1:00 PM",
            img: require("../../assets/user4.jpg"),
            details:{
                destination:"where",
                passanger:12,
                carNumber:"bxr-123"
            }
        },
        {
            id:6,
            title: "Carpool Evnet Y",
            message:"All the passenger confirmed ,Trip will be start on",
            date: "12/2/24",
            time:"1:00 PM",
            img: require("../../assets/user4.jpg"),
            details:{
                destination:"where",
                passanger:12,
                carNumber:"bxr-123"
            }
        },
        {
            id:7,
            title: "Carpool Evnet Y",
            message:"All the passenger confirmed ,Trip will be start on",
            date: "12/2/24",
            time:"1:00 PM",
            img: require("../../assets/user4.jpg"),
            details:{
                destination:"where",
                passanger:12,
                carNumber:"bxr-123"
            }
        },
        {
            id:8,
            title: "Carpool Evnet Y",
            message:"All the passenger confirmed ,Trip will be start on",
            date: "12/2/24",
            time:"1:00 PM",
            img: require("../../assets/user4.jpg"),
            details:{
                destination:"where",
                passanger:12,
                carNumber:"bxr-123"
            }
        },
        {
            id:9,
            title: "Carpool Evnet Y",
            message:"All the passenger confirmed ,Trip will be start on",
            date: "12/2/24",
            time:"1:00 PM",
            img: require("../../assets/user4.jpg"),
            details:{
                destination:"where",
                passanger:12,
                carNumber:"bxr-123"
            }
        },
    ]
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
            const detail = "No of Passenger : "+data.details.passanger +"\nDestination : " + data.details.destination +"\nCar Number : "+ data.details.carNumber + "\n......ETC"
            Alert.alert("Events Detail",detail,[
                {
                  text: 'Ok',
                  onPress: () => console.log("Ok"),
                },
                ]);
          }

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
        {item.message} {item.date} at {item.time}
      </Text>
      <Pressable onPress={()=>{ShowDetail(item)}} style={styles.button} >
        <Text style={styles.btntext} >Details</Text>
      </Pressable>
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

export default DriverUpcomingEvents

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
        fontSize: RFPercentage(3.4),
        fontWeight: 'bold',
        color:Color.secondary,
        marginTop: 20,
      },
      text: {
        fontSize: RFPercentage(2.3),
        marginTop: 10,
        marginBottom: 20,
        color:Color.secondary
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
      }
})