import { StyleSheet, Pressable,Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Color from '../Color'
import DriverPastEvents from './DriverPastEvent';
import DriverUpcomingEvents from './DriverUpcomingEvents';
import CurrentOpenActivtiy from './CurrentOpenActivtiy';

const DriverList = ({listevent}) => {
  const [active,setActive]=useState(1);

  const HandleActive=(id)=>{
    setActive(id);
  }

  

  return (
    <View style={styles.activitytype}>
    <View style={{flex:0.5}}>
    <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      {listevent.map((eventtype)=>{
        return(
            <Pressable onPress={()=>{HandleActive(eventtype.id)}} key={eventtype.id} style={active===eventtype.id?[styles.eventtype,{backgroundColor:Color.lblue}]:styles.eventtype}>
              <Text style={{color:active===eventtype.id?Color.primary:Color.secondary}}>{eventtype.eventtype}</Text>
            </Pressable>
        )
      })}
      </ScrollView>
      </View>
      <View style={{flex:8}}>
      {active ===1 ? <View style={styles.list} >
        <CurrentOpenActivtiy/>
      </View>: active === 2 ? <View style={styles.list} >
        <DriverUpcomingEvents />
      </View> : <View style={styles.list} >
        <DriverPastEvents />
      </View>
      }
      </View>
      </View>
  )
}

export default DriverList

const styles = StyleSheet.create({
  activitytype:{
    flex:1
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