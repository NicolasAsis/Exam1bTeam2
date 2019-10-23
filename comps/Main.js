import React from 'react';
import {View,Text} from 'react-native';
import Right from './Right';

function Main(){
    return(
        <View style={{
            flexDirection:'row',
            display:'flex',
            height:'100%'
        }}>
            {/* <View style={{
                backgroundColor:'blue',
                height:'100%',
                flex:2
            }}></View> */}
            <Right />
        </View>
    );
}

export default Main;