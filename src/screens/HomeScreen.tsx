import React from 'react';
import {StyleSheet, Text,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
    return (
        <View style={styles.view}>
        <LinearGradient colors={['blue','purple','white']} style={{...StyleSheet.absoluteFillObject }}/>
        <Text style={styles.text}>HelloWorld</Text>
        <Icon name="star-outline"
                        color="white"
                        size={60}
                    />
       
      </View>
    )
}






const styles = StyleSheet.create({

    view:{
      flex:1,
      backgroundColor:'grey',
      justifyContent:'center',
      alignItems:'center',
    },
  
    text:{
      fontSize:20,
      color:'white',
    },
    
  
      
  });
  
