import Theme from '../../theme/index';
import { Text, View, StyleSheet, Button, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Message({ navigation, setisLoggedIn }) {
    return (
      <View >
       <View style={Theme.statusBar} />
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
        <View style={styles.container}>
          <View style={{maxWidth: "90%"}}>
            <Text style={{fontSize:20, fontWeight:"bold", color: "#FF5D5D", marginTop:30, marginBottom: 20}}>Mes nouveaux acteur.rices</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Image
                style={{maxHeight: 60, maxWidth: 60, borderRadius: 100, borderRadius: 150, borderWidth: 1, borderColor: "#A3A3A3"}}
                source={require('../../assets/picture.jpg')}
              />
              <Image
                style={{maxHeight: 60, maxWidth: 60, borderRadius: 100, borderRadius: 150, borderWidth: 1, borderColor: "#A3A3A3"}}
                source={require('../../assets/picture.jpg')}
              />
              <Image
                style={{maxHeight: 60, maxWidth: 60, borderRadius: 100, borderRadius: 150, borderWidth: 1, borderColor: "#A3A3A3"}}
                source={require('../../assets/picture.jpg')}
              />
              <Image
                style={{maxHeight: 60, maxWidth: 60, borderRadius: 100, borderRadius: 150, borderWidth: 1, borderColor: "#A3A3A3"}}
                source={require('../../assets/picture.jpg')}
              />
              <Image
                style={{maxHeight: 60, maxWidth: 60, borderRadius: 100, borderRadius: 150, borderWidth: 1, borderColor: "#A3A3A3"}}
                source={require('../../assets/picture.jpg')}
              />
            </View>
            <Text style={{fontSize:20, fontWeight:"bold", color: "#FF5D5D", marginTop:20, marginBottom: 20}}>Messages</Text>
            <View style={{flexDirection:"row", backgroundColor: "white", borderRadius:20, padding: 15}}>
              <Image
                style={{maxHeight: 60, maxWidth: 60, borderRadius: 100, borderRadius: 150, borderWidth: 1, borderColor: "#A3A3A3", marginRight: 15}}
                source={require('../../assets/picture.jpg')}
              />
              <View>
                <Text style={{color: "#FF5D5D"}}>Éva</Text>
                <Text style={{maxWidth: "80%", color: "#8F8F8F"}}>Grave !! je peux t'envoyer la séance via l'appli !</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center"
    },
  })

