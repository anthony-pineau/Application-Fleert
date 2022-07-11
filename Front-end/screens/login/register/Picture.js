import React, { useState } from 'react';
import { Button, StyleSheet, Image, TextInput, Text, View, Pressable, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Theme from '../../../theme/index';
 
import Header from '../../../components/register/header';
import Footer from '../../../components/register/footer';

export default function Picture({ navigation }) {

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }

  return (
    <View style={styleSheet.MainContainer}>
      <Header navigation={navigation}></Header>
      <View style={styleSheet.Container}>

        <Text style={Theme.titleRegister}>Ajouter des photos <Text style={{color:'#FF5D5D'}}>*</Text></Text>

        <View style={{flexDirection: "row", width: "80%", justifyContent:"space-between"}}>
          <TouchableOpacity style={styleSheet.button} onPress={openImagePickerAsync}>
            <Text style={{fontSize:50, color:"#FF2D2D"}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleSheet.button} onPress={openImagePickerAsync}>
            <Text style={{fontSize:50, color:"#FF2D2D"}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleSheet.button} onPress={openImagePickerAsync}>
            <Text style={{fontSize:50, color:"#FF2D2D"}}>+</Text>
          </TouchableOpacity>
        </View>

        <Pressable  style={Theme.buttonRegister} onPress={() => navigation.navigate('Movies')}>
          <Text style={Theme.buttonRegisterText}>Continuer</Text>
        </Pressable >
        
      </View>
      <Footer></Footer>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    borderWidth: 3,
    borderColor: "#FF5D5D",
    borderRadius: 30,
    width: "30%",
    height: 130,
    justifyContent: "center",
    alignItems: "center"
  }
});