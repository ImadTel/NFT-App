import { View, Text,Image } from 'react-native'
import React from 'react'
import { SIZES ,COLORS,SHADOWS,FONTS,assets} from '../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const NFTTitle = ( {title,subTitle,titleSize,subtitleSize }) => {
  return (
    <View style={{}} >
      <Text style={{fontFamily:'Inter-SemiBold', fontSize:titleSize, color:Colors.primary}}>{title}</Text>
      <Text style={{fontFamily:'Inter-Regular', fontSize:subtitleSize, color:Colors.primary}}>{subTitle}</Text>
    </View>
  )
}


export const ETHPrice = ({price}) => {
    return (
      <View style={{flexDirection:'row', alignItems:'center' }}>
        <Image  source={assets.eth}  resizeMode='contain' style={{marginRight:3,height:20,width:20}} />
        <Text style={{color:'black',sfontFamily:'Inter-Bold',fontSize:SIZES.large}}>{price}</Text>
      </View>
    )
  }

  export const ImageCmp = ({imgUrl,index}) => {
    return (
        <Image source={imgUrl} resizeMode="contain" style={{height:48,width:48 , marginLeft:index==0?0:-SIZES.font   }} />
    )
  }


  export const People = () => {
    return (
      <View style={{flexDirection:'row',
      }}>
        {[assets.person02,assets.person03,assets.person04].map((item,index)=>
        { return (<ImageCmp imgUrl={item} index= {index}  key={`People-${index}`} />)

        })}
      </View>
    )
  }


  export const EndDate = () => {
    return (
      <View style={{
        paddingHorizontal:SIZES.font,
        paddingVertical:SIZES.base,
        backgroundColor:COLORS.white,
        alignItems:'center',
        justifyContent:'center',
         elevation:1,
         ...SHADOWS.light,
         maxWidth:"50%"
      }}>
        <Text style={{fontFamily:'Inter-Regular',fontSize:SIZES.small,color:COLORS.primary}}>Ending in</Text>
        <Text style={{fontFamily:'Inter-SemiBold',fontSize:SIZES.medium,color:COLORS.primary}}>12h 30m</Text>
      </View>
    )
  }


  export const SubInfos = () => {
    return (
      <View style={{width:"100%",  
      paddingHorizontal:SIZES.font,
      marginTop:-SIZES.extraLarge,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'}}>
        <People/>
        <EndDate /> 
      </View>
    )
  }
