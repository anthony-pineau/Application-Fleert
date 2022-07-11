import React, {useState, useRef} from 'react';
 
import { View, Text, Alert, StyleSheet, Pressable, Image } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import Theme from '../../../theme/index';
 
import Header from '../../../components/register/header';
import Footer from '../../../components/register/footer';

export default function PhoneNumber({ navigation })  {
 
  const [phoneNumber, setPhoneNumber] = useState('');
 
  const phoneInput = useRef(null);
 
  return (
    <View style={styleSheet.MainContainer}>
      <Header navigation={navigation}></Header>
      <View style={styleSheet.Container}>

        <Text style={Theme.titleRegister}>Mon numéro de téléphone <Text style={{color:'#FF5D5D'}}>*</Text></Text>
  

        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          placeholder=''
          defaultCode="FR"
          layout="first"
          autoFocus
          containerStyle={styleSheet.phoneNumberView}
          textContainerStyle={{ paddingVertical: 0 }}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />

        <Pressable  style={Theme.buttonRegister} onPress={() => navigation.navigate('Name')}>
          <Text style={Theme.buttonRegisterText}>Continuer</Text>
        </Pressable >
        
      </View>
      <Footer></Footer>
    </View>
  );
};
 
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
  phoneNumberView: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    marginTop:50,
  },

});