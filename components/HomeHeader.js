import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import React from 'react';
import { COLORS,FONTS,SIZES,assets} from '../constants'

const HomeHeader = ({handleSearch}) => {
  return (
    <View   style={{backgroundColor:COLORS.primary,padding:SIZES.font}}>
      <View  style={{flexDirection:'row' ,justifyContent:'space-between',alignItems:'center' }}>
         <Image source={assets.logo}  resizeMode='contain'  style={{width:90,height:25,}} />
         <View  style={{width:45,height:45}} >
            <Image  source={assets.person01}  resizeMode='contain'  style={{width:"100%",height:"100%"}}  />
            <Image  source={assets.badge}  resizeMode='contain'  
            style={{bottom:0,right:0,position:'absolute' ,width:16,height:16}}  />
         </View>
      </View>
      
      <View  style={{marginVertical:SIZES.font}}>
        <Text  style={{fontFamily:'Inter-Regular',fontSize:SIZES.small,color:COLORS.white}}>
              Hello Angela 👋
        </Text>

        <Text  style={{fontFamily:'Inter-Bold',fontSize:SIZES.medium,color:COLORS.white,marginTop:SIZES.base/2}}>
              Let's find a masterpiece
        </Text>

        <View style={{marginTop:SIZES.font       }} >
          <View   style={{
            paddingVertical:SIZES.small-2,width:"100%", 
            flexDirection:'row',alignItems:'center' ,borderRadius:SIZES.font,
            backgroundColor:COLORS.gray,
            paddingHorizontal:SIZES.font}}>
            <Image source={assets.search} resizeMode="contain"   style={{marginLeft:SIZES.base,marginRight:SIZES.base,width:20,height:20}}   />
            <TextInput  placeholder='search nfts'   style={{flex:1}}  onChangeText={handleSearch}  />
          </View>

        </View>
      </View>


    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({})