import React from 'react';
import Right from './Right';
import PopUp from './Popup';

function Main(){
    return(
        <View>
            <Text>App</Text>
            <PopUp />



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