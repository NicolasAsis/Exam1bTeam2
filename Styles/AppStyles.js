import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({

  image:{
    height: 50,
    width: 50,
    right:0,
    bottom:0,

  },

  background:{
    backgroundColor: 'gray',
    opacity: 0.3,
    height: 600

  },

  closeBt: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  gearBt:{
    flexDirection:'row',
    alignItems:'flex-end',
    height:650,
    position:'absolute',
    right:0

  }

})

export default styles;
