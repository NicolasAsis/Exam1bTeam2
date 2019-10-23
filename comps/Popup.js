import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import StyleSheet from 'react-native';

function PopUp(){

const [isClicks, setIsClicks] = useState(1);
const [isFlex, setIsFlex] = useState("flex-end");

if (isClicks >= 3){
  setIsClicks(0);
  setIsFlex("flex-end")
  
} 

if (isClicks === 1){
  setIsFlex("flex-start")
}

if (isClicks === 2){
  setIsFlex("start-end")
}


 return (
    <View style={{display:"flex", flexDirection:"row", alignItems:isFlex, backgroundColor:"green", height:"100%"}}>
      
       <TouchableOpacity
       onPress={()=>{setIsClicks(isClicks + 1)}}
         
       >
         <Text
          style={{height:60, width:60, backgroundColor:'teal'}}>{isClicks}</Text>

       </TouchableOpacity>
     
      
    </View> 
    )
 }

export default PopUp;

 