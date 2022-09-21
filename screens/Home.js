import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {COLORS, NFTData} from '../constants'

import {HomeHeader,NFTCard,FocusedStatusBar} from '../components'
import { FlatList } from 'react-native-gesture-handler'

import { useState } from 'react'




const Home = () => {

  const [NFTdata, setNFTdata] = useState(NFTData);
  
  const handleSearch = (value) =>{
    if (value.length==0) setNFTdata(NFTData);
    else{
      const filteredList = NFTData.filter((item)=>
        item.name.toLowerCase().includes(value.toLowerCase())
      )

      if (filteredList.length)  setNFTdata(filteredList);
      else setNFTdata(NFTData);
    }

  }


  return (
    <SafeAreaView style={{flex:1}}>
     
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      
      <View style={{flex:1}}>
        <View style={{zIndex:0}}>
          <FlatList data={NFTdata} 
            renderItem={({item}) =>{
              return(<NFTCard  data={item}/>)
            }}
            keyExtractor={(item)=>  item.id } 
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader  handleSearch={handleSearch}   />}
          />


          <View style={styles.bg}>
            <View style={{height:240, backgroundColor:COLORS.primary}} />
            <View style={{flex:1, backgroundColor:COLORS.white}} />
          </View>
          

        </View>
      </View>
   

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  bg:{
   position:'absolute',
   top:0,
   bottom:0,
   left:0,
   right:0,
   zIndex:-1,
  }
})

export default Home