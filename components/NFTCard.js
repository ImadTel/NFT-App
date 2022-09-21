import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {COLORS,SHADOWS,SIZES,assets}  from '../constants'

import { CircleButton ,RectButton} from './Button'

import {People,ETHPrice,EndDate,NFTTitle,SubInfos } from './SubInfos'


const NFTCard = ({data}) => {
    const navigation = useNavigation();
  return (
    <View 
    style={{
        backgroundColor:COLORS.white,
        borderRadius:SIZES.font,
        marginBottom:SIZES.extraLarge,
        margin:SIZES.base,
        ...SHADOWS.dark}}>
      <View style={{width:"100%",height:230}}>
          <Image 
          source={data.image}
          resizeMode='cover'
          style={{
            height:"100%",width:"100%",
            borderTopLeftRadius:SIZES.font,
            borderTopRightRadius:SIZES.font,
          }}
          />

          <CircleButton imgURL={assets.heart}  right={10} top={10}  />

      </View>
      <SubInfos  />
      <View style={{width:'100%', padding:SIZES.font}}>
         <NFTTitle title={data.name }   subTitle={data.creator}   titleSize={SIZES.medium} subtitleSize={SIZES.small}    />
         <View  
         style={{marginTop:SIZES.font, flexDirection:'row', 
                justifyContent:'space-between',alignItems:'center'    }}>
                        
          <ETHPrice price= {data.price}  />
          <RectButton   minWidth={120} fontSize={SIZES.medium} handlePress={()=>{navigation.navigate('Details',{data})}} />
         </View> 
      </View>
    </View>
  )
}

export default NFTCard

const styles = StyleSheet.create({})