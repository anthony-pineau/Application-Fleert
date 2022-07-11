import React, { useState } from 'react';
import { Button, StyleSheet, Image, TextInput, Text, View, Pressable,} from 'react-native';

import Theme from '../../../theme/index';
 
import Header from '../../../components/register/header';
import Footer from '../../../components/register/footer';

export default function Birthday({ navigation }) {
  const [BrithdayDay, onChangeBrithdayDay] = useState('');
  const [BrithdayMonth, onChangeBrithdayMonth] = useState('');
  const [BrithdayYears, onChangeBrithdayYears] = useState('');
 
  return (
    <View style={styleSheet.MainContainer}>
      <Header navigation={navigation}></Header>
      <View style={styleSheet.Container}>

        <Text style={Theme.titleRegister}>Ma date de naissance <Text style={{color:'#FF5D5D'}}>*</Text></Text>
        <View style={{flexDirection:"row", alignItems: "center"}}>
          <TextInput
            style={styleSheet.input}
            onChangeText={onChangeBrithdayDay}
            value={BrithdayDay}
            placeholder="00"
            keyboardType="numeric"
          />
          <Text style={{fontSize: 25, marginRight:5, marginLeft:10}}>/</Text>
          <TextInput
            style={styleSheet.input}
            onChangeText={onChangeBrithdayMonth}
            value={BrithdayMonth}
            placeholder="00"
            keyboardType="numeric"
          />
          <Text style={{fontSize: 25, marginRight:5, marginLeft:10}}>/</Text>
          <TextInput
            style={styleSheet.input}
            onChangeText={onChangeBrithdayYears}
            value={BrithdayYears}
            placeholder="0000"
            keyboardType="numeric"
          />
        </View>
        <Pressable  style={Theme.buttonRegister} onPress={() => navigation.navigate('City')}>
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
  input: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomColor: '#A6A6A6',
    fontSize: 20,
    color: 'black',
},
});
