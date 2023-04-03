import { StyleSheet, Pressable,Text, View, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Color from '../Color'
import CurrentRequest from './CurrentRequest';
import PassengerPastEvents from './PassengerPassEvents';
import PassengerUpcomingEvents from './PassengerUpcomingEvents';


const PassengerList = ({listevent}) => {
  const [active,setActive]=useState(1);

  const HandleActive=(id)=>{
    setActive(id);
  }

  return (
    <View style={styles.activitytype}>
    <View style={{flex:0.5}}>
    <ScrollView 
    horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      {listevent.map((eventtype)=>{
        return(
            <Pressable onPress={()=>{HandleActive(eventtype.id)}} key={eventtype.id} style={active===eventtype.id?[styles.eventtype,{backgroundColor:Color.lblue}]:styles.eventtype}>
              <Text style={{color:active===eventtype.id?Color.primary:Color.secondary}}>{eventtype.eventtype}</Text>
            </Pressable>
        )
      })}
      </ScrollView>
      </View>
      <View style={{flex:8}} >
      {active ===1 ? <View style={styles.list} >
        <CurrentRequest/>
      </View>: active === 2 ? <View style={styles.list} >
        <PassengerUpcomingEvents />
      </View>  : <View style={styles.list} >
        <PassengerPastEvents />
      </View>
      }
      </View>
      </View>
  )
}

export default PassengerList

const styles = StyleSheet.create({
  activitytype:{
    flex:1,
  },
      eventtype:{
        marginLeft:10,
        borderColor:"black",
        borderWidth:1,
        padding:4,
        borderRadius:8,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      },
      list:{
        paddingTop:20,
        paddingLeft:6,
        paddingRight:6
      }
})