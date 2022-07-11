import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image
          style={{marginVertical: 50}}
          source={require('../../../assets/Logo-fleert-couleur.png')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 0,
        paddingTop: 0
    },
});

