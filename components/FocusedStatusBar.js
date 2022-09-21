import { View, Text ,StatusBar} from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';
 

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
 
  if (isFocused) return(

      <StatusBar animated={true} {...props} />
      
   
   
  )
  else
  return(
   null
  )
}

export default FocusedStatusBar