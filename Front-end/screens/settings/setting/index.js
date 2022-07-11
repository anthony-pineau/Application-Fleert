import Theme from '../../../theme/index';
import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Setting({ navigation, setisLoggedIn }) {
  const backAction = () => {
    navigation.goBack();
    return true;
  };
    return (
      <View>
       
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height:80, padding: 10}}>
          <View>
            <TouchableOpacity
                onPress={backAction}
                style={{flexDirection:'row'}}
            >
              <Image
                source={require('../../../assets/Arrow-right.png')}
              />
              <Text style={{color:'#FF5D5D', marginLeft:10}}>Retour</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize:20, fontWeight: "bold", color: "#FF5D5D"}}>Réglages</Text>
          <Pressable onPress={() => navigation.navigate('Settings')}>
            <Image
                style={{maxHeight: 60, maxWidth: 60, borderRadius: 100, borderRadius: 150, borderWidth: 1, borderColor: "#FF5D5D"}}
                source={require('../../../assets/picture.jpg')}
            />
          </Pressable>
        </View>
        <View style={{alignItems:"center"}}>
          <Pressable  style={Theme.buttonRegister} onPress={() => setisLoggedIn(false)}>
            <Text style={Theme.buttonRegisterText}>Se déconnecter</Text>
          </Pressable >
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {

      justifyContent: 'center',
      alignItems: 'center',
      maxWidth:'80%',
      margin: 'auto'
    },
  })

