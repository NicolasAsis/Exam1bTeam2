import React, { Component } from 'react';
import { Text, TextInput, View,Button,Linking} from 'react-native';


function Left(){
const [value,onChangeText] = React.useState();
const url="https://google.com";
  return(
    <View>
    <Button
    title="Set Image" onPress={() => Linking.openURL(url)}
    />
    <TextInput
    placeholder="image url"
    onChangeText={url=> onChangeText(url)}
    value={value}
    />


    <Text>your images url is {(value)} </Text>
</View>
  );
}

export default Left;
