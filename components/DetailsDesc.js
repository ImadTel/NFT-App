import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react';
import { useState } from 'react';
import { FONTS,COLORS,SHADOWS, SIZES,assets } from '../constants'

import { ETHPrice,NFTTitle } from './SubInfos';

const DetailsDesc = ({data}) => {
   const [text, setText] = useState(data.description.slice(0,100))
   const [readMore, setreadMore] = useState(false)

  return (
    <>
     <View   style={{width:'100%', flexDirection:'row', justifyContent:'space-between' ,alignItems:'center'}}>
      <NFTTitle title={data.name}  subTitle={data.creator}  titleSize={SIZES.extraLarge}  
       subtitleSize={SIZES.font}  />
       <ETHPrice price={data.price} />
    </View>
 
    <View  style={{marginVertical:SIZES.extraLarge*1.5}}>
            <Text style={{color:COLORS.primary,fontFamily:'inter-SemiBold',fontSize:SIZES.medium }}  >
                Description
            </Text>

            <Text style={{marginTop:SIZES.base,  color:COLORS.secondary,fontFamily:'inter-Regular',fontSize:SIZES.small,lineHeight:SIZES.large, }}  >
                {text}
                {!readMore && '...' }  
                <Text 
                   onPress={()=>{
                     if(!readMore) {setText(data.description);setreadMore(true)}
                     else {setText(data.description.slice(0,100));setreadMore(false)}
                   }}                   
                   
                style={{marginTop:SIZES.base,  color:COLORS.primary,fontFamily:'inter-SemiBold',fontSize:SIZES.small, }}>
                    {readMore?"Read Less": "Read More"}
                </Text>
            </Text>
           
           
            
    </View>
    </>

  )
}

export default DetailsDesc