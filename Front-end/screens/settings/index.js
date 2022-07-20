import Theme from '../../theme/index';
import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Settings({ navigation, setisLoggedIn }) {
  const backAction = () => {
    navigation.goBack();
    return true;
  };
    return (
      <View style={styles.container} >
        <View style={{width:'100%', marginTop:25, marginLeft:20}}>
          <TouchableOpacity
              onPress={backAction}
              style={{flexDirection:'row'}}
          >
            <Image
              source={require('../../assets/Arrow-right.png')}
            />
            <Text style={{color:'#FF5D5D', marginLeft:10}}>Retour</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: "#FF5D5D", marginTop: 30, marginBottom: 30}}>Profil</Text>
        <Image
          style={styles.img}
          source={require('../../assets/picture.jpg')}
        />
        <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 20}}>Éléa, 20</Text>

        <View style={styles.containerButton}>
          <View style={{flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
            <View style={{backgroundColor: 'white', borderRadius: 100, paddingBottom: 9, paddingTop: 13, paddingLeft: 13, paddingRight: 13}}>
              <Ionicons name="shield-outline" size={40} color="#8F8F8F" />
            </View>
            <Text style={{color: "#8F8F8F", marginTop: 5}}>Sécurité</Text>
          </View>
          
          <View style={{flexDirection: "column", alignItems:"center", justifyContent:"center", marginTop: 100}}>
            <View style={{backgroundColor: 'white', borderRadius: 100, paddingBottom:20, paddingTop: 20, paddingLeft: 22, paddingRight: 22}}>
              <Ionicons name="pencil-outline" size={40} color="#8F8F8F" />
            </View>
            <Text style={{color: "#8F8F8F", marginTop: 5}}>Editer le profil</Text>
          </View>

         
          <Pressable style={{flexDirection: "column", alignItems:"center", justifyContent:"center"}} onPress={() => navigation.navigate('Setting')}>
            <View style={{backgroundColor: 'white', borderRadius: 100, paddingBottom: 11, paddingTop:11, paddingLeft: 13, paddingRight: 13}}>
              <Ionicons name="settings-outline" size={40} color="#8F8F8F" />
            </View>
            <Text style={{color: "#8F8F8F", marginTop: 5}}>Réglages</Text>
          </Pressable>
        </View>  
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      backgroundColor: '#F0F0F0',
      marginTop: 0
    },
    containerButton: {
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth:'80%',
      marginTop: 30,
    },
    img: {
      maxWidth:250,
      maxHeight: 250,
      borderRadius: 150,
      borderWidth: 2,
      borderColor: "#FF5D5D",
      flex: 1
    },
    linearGradient: {
      flex : 1,
      paddingTop: 50,
      paddingHorizontal: 20,
      paddingVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
  })

