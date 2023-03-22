import React, {useState} from 'react';
import { useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Button,Image, ImageBackground, Dimensions } from 'react-native';
import Todo from './Todo2';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AntDesign } from '@expo/vector-icons';



export default function TodoScreen ( { navigation } ) {

  const [todo, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [sound, setSound] = React.useState();



  const handleAddTodo = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, todo])
    setTask(null);
  }

  const completeTodo = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  const [fontsLoaded] = useFonts ({
    'Inter': require('../assets/fonts/Inter-LightItalic.otf'),
  }); 

  useEffect (() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[]);

  if (!fontsLoaded){
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }


  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.tasksWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <AntDesign name='leftcircle' size={30} color="white"/>
          </TouchableOpacity>
        <Text style={styles.sectionTitle}>Kegiatan Ramadhan</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTodo(index)}>
                  <Todo text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    </ScrollView>
      <View style={styles.kotak}>
        <Text style={{fontFamily:"Inter", fontSize:13}}>Copyright Rendy Prayoga- 120140036</Text>
      </View>
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Kegiatan apa yang ingin di lakukan....'} value={todo} onChangeText={text => setTodo(text)} />
        <TouchableOpacity onPress={() => handleAddTodo()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
        
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    top:-32,
    left:40,
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
  },
  kotak: {
  alignItems:'center'
  },
  addWrapper: {
    width: 100,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  musik: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  img: {
    width:10,
  },
  addText: {},
});
