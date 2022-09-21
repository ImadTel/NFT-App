import { StyleSheet,Image,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import {COLORS,SIZES,SHADOWS} from '../constants'


export const CircleButton = ({imgURL,handlePress,...props}) => {
  return (
    
      <TouchableOpacity onPress= {handlePress} 
         style={{
        height:40,width:40,
        backgroundColor:COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        ...SHADOWS.light,
        ...props,
       

      }}>
       <Image source={imgURL} resizeMode='contain' style={{height:24,width:24}} />
      </TouchableOpacity>
   
  )
}




export const RectButton = ({minWidth,fontSize,handlePress,...props}) =>{
    return(
        <TouchableOpacity style={{
            height:50,width:50,
            backgroundColor:COLORS.primary,
            borderRadius: SIZES.extraLarge,
            minWidth:minWidth,
            padding:SIZES.small,
            ...props,
          
          }}
          onPress={handlePress}
          >
            <Text style={{color:COLORS.white,textAlign:'center',fontSize:fontSize, fontFamily:'Inter-SemiBold'}}   >place a bid</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({})