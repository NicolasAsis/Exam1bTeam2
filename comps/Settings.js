import React, {useState} from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import styles from '../Styles/AppStyles'

function Settings(){
  const [showMenu, setShowMenu] = useState(false);
  var menu = null;
 if(showMenu === true){

   menu = (
     <View style={styles.background}>
     <Button
      style={styles.closeBt}
       color="black"
       title="Close"
       onPress={()=>{ setShowMenu(!showMenu)}}
     />

     </View>
   );

 }
    return(
        <View>
        {menu}
          <View style={styles.gearBt}>
            <TouchableOpacity  activeOpacity={0.5}
               onPress={()=>{ setShowMenu(!showMenu)}}>
                 <Image
                  source={require('../Images/gears.png')}
                 style={styles.image}
                 />

             </TouchableOpacity>
         </View>

        </View>

    );
}

export default Settings;
