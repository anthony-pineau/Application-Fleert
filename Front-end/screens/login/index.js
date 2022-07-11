import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

import Theme from '../../theme/index';

import Header from '../../components/register/header';

export default function Login({ navigation, setisLoggedIn }) {
  const [prenom, onChangePrenom] = useState('');
  const [nom, onChangeNom] = useState('');
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 45, 45, 1.00)', 'rgba(255, 45, 45, 0.69)', 'rgba(255, 45, 45, 0.50)', 'rgba(255, 45, 45, 0.0)']}
        style={styles.linearGradient}
      >
        <View>
          <Text style={styles.title}>Créer un compte fleert</Text>
          <Text style={styles.text}>En cliquant sur Connexion, vous accepter nos Conditions d'utilisation. Consultez Politique de confidentialité et notre Politique relative aux cookies pour savoir comment nous utilisons vos données.</Text>
        </View>

        <View style={{width:'100%', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangePrenom}
            value={prenom}
            placeholder="Email"
            placeholderTextColor = "white"
          />
          <TextInput
          style={styles.input}
          onChangeText={onChangeNom}
          value={nom}
          placeholder="Mot de passe"
          secureTextEntry={true}
          placeholderTextColor = "white"
          />

          <Pressable  style={styles.buttonLogin} onPress={() => {navigation.navigate('Home'); setisLoggedIn(true)}}>
            <Text style={styles.buttonLoginText}>Connexion</Text>
          </Pressable >
          <Pressable onPress={() => navigation.navigate('Email')}>
            <Text style={{color:"white", fontSize:16, textDecorationLine:"underline", marginTop:10}}>Créer un compte</Text>
          </Pressable >
        </View>

        <View style={{width:'100%', alignItems: 'center'}}>
          <Text style={{color: "#FF5D5D", fontSize: 16, marginBottom: 20}}>Problème de connexion ?</Text>
          <Image
              source={require('../../assets/Logo-fleert-couleur.png')}
            />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    fontSize: 15,
    color: 'white',
    borderRadius: 50,
    width: '80%',
    textAlign: 'center',
    marginBottom: 10,
  },
  statusBar: {
    backgroundColor: 'white',
    height: Constants.statusBarHeight
  },
  title: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: "bold",
    color: "white",
 
  },
  text: {
    fontSize: 15,
    maxWidth: "80%",
    textAlign: "center",
    color: "white",
    marginTop: 15,
    marginBottom: 30,
  },
  link: {
    fontSize: 15,
    color: 'white',
    textDecorationLine: 'underline',
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonLogin: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: '80%',
    paddingVertical: 15,
    marginTop:20
  },
  buttonLoginText: {
    color: '#FF5D5D',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase'
},
});
