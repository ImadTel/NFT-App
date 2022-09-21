import { StyleSheet, Text, View,StatusBar,SafeAreaView,Image,FlatList } from 'react-native'
import React from 'react'
import { COLORS,SHADOWS,assets,SIZES,FONTS } from '../constants';
import { CircleButton,RectButton ,SubInfos,DetailsDesk,DetailsBid,FocusedStatusBar} from '../components';
import DetailsDesc from '../components/DetailsDesc';


const DetailsHeader = ({data,navigation}) =>
  (<View  style={{width:"100%",height:340,}}>
      <Image source={data.image}    
        resizeMode="cover"
        style={{width:"100%" , height:"100%"}}

      />
    <CircleButton imgURL={assets.left}  top={StatusBar.currentHeight+10}  left={15}    handlePress={()=> navigation.goBack() }  />
    <CircleButton imgURL={assets.heart}  top={StatusBar.currentHeight+10}  right={15}      />

  </View>

  )





const Details = ({route,navigation}) => {
  const {data} = route.params;
  console.log("-----------------------------");
  console.log(data);
  
  console.log("-----------------------------");

  return (
    <SafeAreaView  style={{flex:1,}}>
       <FocusedStatusBar  
        barStyle="dark-content"
        backgroundColor="transparent"
         translusent = {true}
       />
       <View style={{width:"100%",position:'absolute',
                      bottom:0,paddingVertical:SIZES.font,
                      justifyContent:'center', alignItems:'center' ,
                      backgroundColor:'rgba(255,255,255,0.5)',
                      zIndex:1,
                      }}>

      
       <RectButton    minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}   />
       </View>

       <FlatList 
       data={data.bids}
       renderItem = {({item} ) => {return(<DetailsBid  bid={item} />)}  }
       keyExtractor = {(item)  => item.id }
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom:SIZES.extraLarge*3}}
       ListHeaderComponent={()=>(
       <React.Fragment>
        <DetailsHeader   data={data}  navigation={navigation} />
        <SubInfos />
        <View style={{padding:SIZES.font}}> 
          < DetailsDesc  data={data} />
          {data?.bids?.length >0 && (
            <Text style={{fontSize:SIZES.font,fontFamily:'Inter-SemiBold',color:COLORS.primary }}>
                Current bid
            </Text>
          )}

        </View>
      </React.Fragment>)}
        
  


       />
       

    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({})