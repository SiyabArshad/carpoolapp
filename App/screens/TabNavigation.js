import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IonIcon from "react-native-vector-icons/Ionicons"

import CarpoolForm from '../screens/CarpoolForm';
import CarpoolActivitis from '../screens/CarpoolActivitis';
import Profile from '../screens/Profile'
import NotificationPage from '../screens/Notification';
import ChatArea from '../screens/ChatArea'

import Color from '../Color';
import { Pressable, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
        <Tab.Navigator initialRouteName='Request' screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Request') {
            iconName = focused
              ? 'create'
              : 'create-outline';
          } else if (route.name === 'Activities') {
            iconName =  'analytics';
          }else if(route.name==="Profile"){
            iconName = focused ? 'settings' :'settings-outline'
          }else if(route.name==="Notification"){
            iconName = "ios-notifications-circle-outline"
          }else if(route.name==="Chat"){
            iconName = focused? "chatbox":"chatbox-outline"
          }
          return focused?<TouchableOpacity style={{backgroundColor:Color.secondary,paddingHorizontal:RFPercentage(1),paddingVertical:RFPercentage(1),borderRadius:RFPercentage(1),display:"flex",
          alignItems:"center",justifyContent:"center"}}><IonIcon name={iconName} size={size} color={color} /></TouchableOpacity>:<IonIcon name={iconName} size={size} color={color} />

        },

      headerShown:false,
      tabBarActiveTintColor:Color.tabbarclr,
      tabBarInactiveTintColor:Color.secondary,
      tabBarLabelStyle:{fontSize:12}, 
      tabBarShowLabel:false, 
      tabBarStyle:{
        backgroundColor:Color.tabbarclr,
        marginBottom:5,
        marginLeft:12,
        marginRight:12,
        borderRadius:15,
        height:60,
        elevation:6
      }
      }
      )
      }
        > 
        
      <Tab.Screen name="Activities" component={CarpoolActivitis} />
      <Tab.Screen name="Notification" component={NotificationPage} />
      <Tab.Screen name="Request" component={CarpoolForm} />
      <Tab.Screen name="Chat" component={ChatArea} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    
  )
}

export default TabNavigation

