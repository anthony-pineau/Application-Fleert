import React, { useState } from 'react';
import { Button, StyleSheet, Image, TextInput, Text, View, Pressable,} from 'react-native';

import Theme from '../../../theme/index';
 
import Header from '../../../components/register/header';
import Footer from '../../../components/register/footer';

export default function Views({ navigation }) {
  const [userView, setUserView] = useState(null);
  const data = [
    { value: 'Femme' },
    { value: 'Homme' },
    { value: 'Tout le monde' },
  ];
  return (
    <View style={styleSheet.MainContainer}>
      <Header navigation={navigation}></Header>
      <View style={styleSheet.Container}>

        <Text style={Theme.titleRegister}>Je suis attiré.e par <Text style={{color:'#FF5D5D'}}>*</Text></Text>
  

        {data.map((item) => {
          return (
            <Pressable
              style={ 
                item.value === userView? styleSheet.selected : styleSheet.unselected
              } 
              onPress={() => setUserView(item.value)}
            >
              
              <Text style={ item.value === userView? styleSheet.optionSelected : styleSheet.option} > 
                {item.value}
              </Text>
            </Pressable>
          );
        })}

        <Pressable  style={Theme.buttonRegister} onPress={() => navigation.navigate('Picture')}>
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
  option: {
    fontSize: 25,
    color: '#FF2D2D',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionSelected: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  unselected: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#FF2D2D',
    width: '60%',
    marginBottom: 10,
    marginTop: 10,
  },
  selected: {
    backgroundColor: '#FF2D2D',
    margin: 5,
    padding: 10,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#FF2D2D',
    width: '60%',
    marginBottom: 10,
    marginTop: 10,
  },
});