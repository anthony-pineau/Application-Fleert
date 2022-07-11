import React from 'react';
import { Button, StyleSheet, Image, TextInput, Text, View} from 'react-native';

import Header from '../../../components/register/header';

export default function IconChoice({ navigation }) {
  return (
    <View style={styles.container}>
      
        <Button
            title="Continuer"
            onPress={() => navigation.navigate('Home')}
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
