import React from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity, BackHandler, Alert } from 'react-native';
import Theme from '../../../theme/index';

export default function Header({navigation}) {
  const backAction = () => {
    navigation.goBack();
    return true;
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={backAction}
      >
        <Image
          source={require('../../../assets/Arrow-right.png')}
        />
        <Text style={styles.text}
      >Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    paddingBottom:100
  },
  text: {
    fontSize: 15,
    color: '#FF2D2D',
    marginLeft: 20,
  },
});

