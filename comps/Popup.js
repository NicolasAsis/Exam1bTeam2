import React, {useState} from 'react';
import {View,Button} from 'react-native';
import Toast from 'react-native-rn-toast';
import {ToastAndroid} from 'react-native';

function PopUp(){

const [isClicks, setIsClicks] = useState(1);


if (isClicks >= 3){
  setIsClicks(0);
} 
if (isClicks === 1){
  ToastAndroid.showWithGravity(
    'Moved Up',
    ToastAndroid.LONG,
    ToastAndroid.TOP,
  )   
  }
if (isClicks === 2){
  ToastAndroid.showWithGravity(
    'Toast Moved Down',
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
  )   
  }

 return (
    <View 
    onLayout={()=>{
      ToastAndroid.showWithGravity(
        'Toast',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      )

    }}>
     
      
    </View> 
    )
 }

export default PopUp;

 