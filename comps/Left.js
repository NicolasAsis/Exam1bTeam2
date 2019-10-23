import React, { useState } from 'react';
import { Text, TextInput, View,Button, ImageBackground} from 'react-native';


function Left(){
const [value,onChangeText] = useState();
const[bgImg,setBgImg]= useState(false);
var bg = null;

if(bgImg === true){
  bg =
<ImageBackground
source = {{uri:value}}
style={{width:'100%',height:'100%'}}>
</ImageBackground>
;
}
return(
  <View>
  <Button
  title="Set Image"
  onPress={()=>{setBgImg(!bgImg)}}
   />

   {bg}

    <TextInput
    placeholder="image url"
    onChangeText={text=> onChangeText(text)}
    value={value}
    />
    <Text>your images url is {(value)} </Text>

  </ View>
  );
}

export default Left;
