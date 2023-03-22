import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View,TextInput,ImageBackground,TouchableOpacity } from 'react-native';

export default function Beranda ( { navigation } ) {
    return(
      <ImageBackground 
        style={styles.background} 
        source={require("../assets/Good Time.jpg")}>
          <View style={styles.button}>
            <TouchableOpacity>
            <Button
                color= 'blue'
                title="Tentang"
                onPress={() => navigation.navigate('TentangScreen')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.button2}>
            <TouchableOpacity onPress={() => navigation.navigate('TodoScreen')}>
            <Button
                color= 'blue'
                title="To Do"
                onPress={() => navigation.navigate('TodoScreen')}
              />
            </TouchableOpacity>
          </View>

          </ImageBackground>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    margin:10,
    bottom:150,
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  },
  button2: {
    margin:10,
    bottom:400,
    resizeMode: "contain",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  },

  textbox: {
    color:'white',
    bottom:150,
    fontSize:22,
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  }
});