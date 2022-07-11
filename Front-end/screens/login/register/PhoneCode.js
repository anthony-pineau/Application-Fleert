import React from 'react';
import { Button, StyleSheet, Image, TextInput, Text, View} from 'react-native';

import Header from '../../../components/register/header';

export default function PhoneCode({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Agent.e 007 entrer votre code</Text>
        <TextInput
            placeholder="Mon numéro de téléphone"
            keyboardType="numeric"
        />
        <Button
            title="Continuer"
            onPress={() => navigation.navigate('Email')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
