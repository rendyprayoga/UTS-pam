import {React,useState} from "react";
import { Image,a, StyleSheet, Text, Button, View,TextInput,ImageBackground,TouchableOpacity,useRef } from 'react-native';
import {Link} from 'react-router-dom';
import {AntDesign} from '@expo/vector-icons';

export default function TentangScreen ( { navigation } ) {
    return(
      <ImageBackground 
        style={styles.background} 
        source={require("../assets/Good Time.jpg")}>
        <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <AntDesign name='leftcircle' size={30} color="white"/>
        </TouchableOpacity>
        </View>
       <View style={styles.body}>
       <Image source={require("../assets/rendy.jpeg")} style={styles.foto}/>
       <View style={styles.tentang}>
       <Text>Nama   : Rendy Prayoga</Text>
       <Text>Hobi   : SepakBola</Text>
       <Text>Prodi  : Teknik Informatika</Text>
       </View>
       </View>
        </ImageBackground>
    );

}
const styles = StyleSheet.create({
    background: {
        flex:1,
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center",
      },
      top: {
        top:50,
        height:10,
        width:350,
    },
    Text: {
        top:-30,
        left:40,
        height:50,
        width:350,
        fontSize:20,
    },
    body: {
        flex: 1,
    },
    foto: {
        top:160,
        height:210,
        width:170,
    },
    tentang:{
    top:200,
    alignItems:"center",
    fontSize: 50,
    backgroundColor:"white",
    padding:10,
    borderRadius:10,
    },
    gi: {
        top:230,
        left:1,
    },
    ig: {
        top:180,
        left: 70,
    },
    lin:{
        top:130,
        left:140,
    }
    });