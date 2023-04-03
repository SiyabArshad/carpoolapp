import { StyleSheet, Text, View ,FlatList, Pressable, Alert,ScrollView,TouchableOpacity} from 'react-native'
import { Card,   Image,ListItem ,Avatar } from 'react-native-elements';

import React from 'react'
import Color from '../Color';
import { RFPercentage } from 'react-native-responsive-fontsize';
import IonIcon from "react-native-vector-icons/Ionicons"

export default function SuggestionList({loc}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{position:"relative",top:-5}}>
  {
    [1,2,3,4].map((item,i)=>(
        <TouchableOpacity key={i} onPress={()=>loc("President road east side")}>
        <ListItem containerStyle={{backgroundColor:Color.tabbarclr}} bottomDivider>
    <IonIcon name='location' size={24} color={Color.black}/>
    <ListItem.Content>
      <ListItem.Title>Street no 1</ListItem.Title>
      <ListItem.Subtitle>President road east side.</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
  </TouchableOpacity>
    ))
  }
    </ScrollView>
  )
}