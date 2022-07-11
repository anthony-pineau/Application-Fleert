import React, { useState } from 'react';
import { Button, StyleSheet, Image, TextInput, Text, View, Pressable,} from 'react-native';

import Theme from '../../../theme/index';
 
import Header from '../../../components/register/header';
import Footer from '../../../components/register/footer';

export default function City({ navigation }) {
  const [city, onChangeCity] = useState('');

  return (
    <View style={styleSheet.MainContainer}>
      <Header navigation={navigation}></Header>
      <View style={styleSheet.Container}>

        <Text style={Theme.titleRegister}>J'habite à <Text style={{color:'#FF5D5D'}}>*</Text></Text>
        <TextInput
          style={Theme.input}
          onChangeText={onChangeCity}
          value={city}
          placeholder=""
        />
        <Pressable  style={Theme.buttonRegister} onPress={() => navigation.navigate('Gender')}>
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
});