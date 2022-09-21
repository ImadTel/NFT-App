import { View, Text  , Image} from 'react-native'
import React from 'react'
import { ETHPrice } from './SubInfos'
import { COLORS,SIZES,FONTS } from '../constants'

export const DetailsBid = ({bid}) => {  
  return (
    <View style={{marginHorizontal:15,paddingVertical:8 ,
        flexDirection:'row',justifyContent:'space-between',alignItems:'center'
    }}>
      <Image  source={bid.image}  resizeMode="contain"  style={{width:48,height:48}}   />
      <View>
        <Text   style={{fontFamily:'Inter-SemiBold', fontSize:SIZES.small,color:COLORS.primary}}>
            Bid placed by {bid.name}
        </Text>
        <Text   style={{fontFamily:'Inter-Regular', fontSize:SIZES.small-2,color:COLORS.secondary}}>
           {bid.date}
        </Text>
      </View>

      <ETHPrice price={bid.price} />
    </View>
  )
}

