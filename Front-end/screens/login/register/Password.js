import React, { useState } from 'react';
import { Button, StyleSheet, Image, TextInput, Text, View, Pressable,} from 'react-native';

import Theme from '../../../theme/index';
 
import Header from '../../../components/register/header';
import Footer from '../../../components/register/footer';

export default function Password({ navigation }) {
  const [Password, onChangePassword] = useState('');
  const [ConfirmPassword, onChangeConfirmPassword] = useState('');

  return (
    <View style={styleSheet.MainContainer}>
      <Header navigation={navigation}></Header>
      <View style={styleSheet.Container}>

        <Text style={Theme.titleRegister}>Mot de passe <Text style={{color:'#FF5D5D'}}>*</Text></Text>
        <TextInput
          style={Theme.input}
          onChangeText={onChangePassword}
          value={Password}
          placeholder="Votre mot de passe"
          secureTextEntry={true}
        />
        <TextInput
          style={Theme.input}
          onChangeText={onChangeConfirmPassword}
          value={ConfirmPassword}
          placeholder="Confirmation du mot de passe"
          secureTextEntry={true}
        />
        <Pressable  style={Theme.buttonRegister} onPress={() => navigation.navigate('PhoneNumber')}>
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
