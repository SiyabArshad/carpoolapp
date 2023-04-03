import { View, SafeAreaView,Text,TouchableOpacity,Pressable,Button,Modal,ImageBackground,Image,ScrollView ,StyleSheet,TextInput} from 'react-native'
import * as React from 'react'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen"
import colors from '../Color';
export default function ToptabPassenger() {
    /*
    0 mean all
    1 mean income 
    2 mean expenses
    */
    const[activetab,setactivetab]=React.useState(0)
  return (
    <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:hp(2)}}>
    <View style={{borderRadius:hp(2.7),borderWidth:1,borderColor:colors.black,display:"flex",
    flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"95%",overflow:"hidden"}}>
            <Pressable onPress={()=>setactivetab(0)} style={{paddingHorizontal:hp(3),paddingVertical:hp(1.2),
            backgroundColor:activetab===0?colors.black:colors.white,
                borderRadius:hp(2.7),margin:1,minWidth:"30%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Text style={{color:activetab===0?colors.white:colors.black}}>ALL</Text>
            </Pressable>
            <Pressable onPress={()=>setactivetab(1)} style={{paddingHorizontal:hp(3),paddingVertical:hp(1.2),
            backgroundColor:activetab===1?colors.black:colors.white,
                borderRadius:hp(2.7),margin:1,minWidth:"30%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Text style={{color:activetab===1?colors.white:colors.black}}>INCOME</Text>
            </Pressable>
            <Pressable onPress={()=>setactivetab(2)} style={{paddingHorizontal:hp(3),paddingVertical:hp(1.2),
            backgroundColor:activetab===2?colors.black:colors.white,
                borderRadius:hp(2.7),margin:1,minWidth:"30%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Text style={{color:activetab===2?colors.white:colors.black}}>EXPENSES</Text>
            </Pressable>
        </View>
    </View>
  )
}