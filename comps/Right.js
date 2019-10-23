import React, { useState } from 'react';
import {View,Text,Switch} from 'react-native';

function Right(){

    const [normal, setNormal] = useState(true);
    const [wide, setWide] = useState(false);
    const [wider, setWider] = useState(false);
    const [widest, setWidest] = useState(false);
    const [flexval, setFlexval] = useState(1);

    return(
        <View style={{
            backgroundColor:'pink',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flex:flexval,
            transition:'all 1s'
        }}>
            <Text>Normal</Text>
            <Switch
                trackColor={{false:'#E1E1E1',true:'#10E316'}}
                onValueChange ={()=>{
                    setNormal(true)
                    setWide(false)
                    setWider(false)
                    setWidest(false)
                    setFlexval(1)
                }}
                value={normal}
            />
            <Text>Wide</Text>
            <Switch
            trackColor={{false:'#E1E1E1',true:'#10E316'}}
            onValueChange ={()=>{
                setNormal(false)
                setWide(true)
                setWider(false)
                setWidest(false)
                setFlexval(2)
            }}
            value={wide}
            />
            <Text>Wider</Text>
            <Switch
            trackColor={{false:'#E1E1E1',true:'#10E316'}}
            onValueChange ={()=>{
                setNormal(false)
                setWide(false)
                setWider(true)
                setWidest(false)
                setFlexval(3)
            }}
            value={wider}
            />
            <Text>Widest</Text>
            <Switch
            trackColor={{false:'#E1E1E1',true:'#10E316'}}
            onValueChange ={()=>{
                setNormal(false)
                setWide(false)
                setWider(false)
                setWidest(true)
                setFlexval(4)
            }}
            value={widest}
            />
        </View>
    );
}

export default Right;