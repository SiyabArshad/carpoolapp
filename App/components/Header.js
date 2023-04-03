import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import React from 'react'
import Color from '../Color'
import { useNavigation } from '@react-navigation/native'
import Lottie from 'lottie-react-native'
import Antdesign from "react-native-vector-icons/AntDesign"
import Iconsm from "react-native-vector-icons/MaterialCommunityIcons"
const Header = ({navigate}) => {
  const navigation=useNavigation()
  return (
    <View style={styles.header} >
      <Text style={styles.heading}>Car<Text style={styles.subheading} >Pool</Text></Text>
        <TouchableOpacity onPress={()=>navigate.navigate("livechat")} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Iconsm name='email' size={35} color={Color.lblue}/>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        padding:10,
        paddingLeft:18,
        backgroundColor: Color.primary
        ,display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    heading:{
        fontSize: RFPercentage(4.5),
        fontWeight:"bold",
        color:Color.secondary
    },
    subheading:{
        color: Color.lblue
    }
})