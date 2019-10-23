import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import StyleSheet from 'react-native';

function PopUp(){


const [isFlex, setIsFlex] = useState(true);
const [isClicks, setIsClicks] = useState(0)

let text = "";


if (isClicks >= 3){
  text = "Toast";
  setIsClicks(1);
}

if (isClicks === 0){
  text = "Toast";
} 

if (isClicks === 1){
  text = "Toast moved up";
}

if (isClicks === 2){
  text = "toast moved down";
}


 return (
    <View style={{display:"flex", flexDirection:"row", alignItems:isFlex ? "flex-end" : "flex-start" , height:"90%"}}>
      
       <TouchableOpacity
       onPress={()=>{setIsFlex(!isFlex), setIsClicks(isClicks + 1)}}
  
         
       >
         <Text
          style={{height:60, width:200, backgroundColor:'teal', borderRadius:20, fontSize:18, textAlign:"center"}}>{text}</Text>

       </TouchableOpacity>
     
      
    </View> 
    )
 }

export default PopUp;

 