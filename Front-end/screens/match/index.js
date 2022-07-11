import Theme from '../../theme/index';
import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Match({ navigation, setisLoggedIn }) {
    return (
      <View>
       
       <View style={{height:80, paddingTop: 10, flexDirection: "column"}}>
          <View style={{alignItems: "center", height:10}}>
            <Image
                source={require('../../assets/Logo-fleert-couleur.png')}
            />
          </View>

          <Pressable  style={{alignItems: "flex-end", maxWidth: "95%"}} onPress={() => navigation.navigate('Settings')}>
            <Image
                style={{maxHeight: 60, maxWidth: 60, borderRadius: 100, borderRadius: 150, borderWidth: 1, borderColor: "#FF5D5D"}}
                source={require('../../assets/picture.jpg')}
            />
          </Pressable>
        </View>
       
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth:'80%',
      margin: 'auto'
    },
  })

