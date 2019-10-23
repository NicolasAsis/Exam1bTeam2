import React from 'react';
import Right from './Right';
import PopUp from './Popup';
import {View,Text} from 'react-native';


function Main(){
    return(
        <View style={{
            flexDirection:'row',
            display:'flex',
            height:'100%'
        }}>
            <View style={{
                backgroundColor:'white',
                height:'100%',
                flex:2
            }}><PopUp /></View>
               
            <Right />
        </View>
    );
}

export default Main;