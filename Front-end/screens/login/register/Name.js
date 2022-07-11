import React, { useState } from 'react';
import { Button, StyleSheet, Image, TextInput, Text, View, Pressable,} from 'react-native';

import Theme from '../../../theme/index';
 
import Header from '../../../components/register/header';
import Footer from '../../../components/register/footer';

export default function Name({ navigation }) {
  const [prenom, onChangePrenom] = useState('');
  const [nom, onChangeNom] = useState('');

  return (
    <View style={styleSheet.MainContainer}>
      <Header navigation={navigation}></Header>
      <View style={styleSheet.Container}>

        <Text style={Theme.titleRegister}>mon Nom et prénom <Text style={{color:'#FF5D5D'}}>*</Text></Text>
        <TextInput
          style={Theme.input}
          onChangeText={onChangePrenom}
          value={prenom}
          placeholder="Prénom : JAMES"
        />
         <TextInput
          style={Theme.input}
          onChangeText={onChangeNom}
          value={nom}
          placeholder="Nom: BOND"
        />
        <Pressable  style={Theme.buttonRegister} onPress={() => navigation.navigate('Birthday')}>
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