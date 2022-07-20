import Theme from '../../theme/index';
import { Text, View, StyleSheet, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function movieNotSeen({ navigation, setisLoggedIn }) {
    return (
      <View>
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
          <View style={{width: "90%"}}>
            <Text style={{fontSize:20, fontWeight:"bold", color: "#8F8F8F", marginTop:20, marginBottom: 20}}>Ma liste de film et série à regarder</Text>
            <View style={{flexDirection:"row", backgroundColor: "white", borderRadius:20, padding: 15, justifyContent:"space-between"}}>
              <View>
                <Text style={{color: "#FF5D5D", fontSize:16, fontWeight:"bold", textTransform:"uppercase"}}>Titanic</Text>
                <Text style={{color: "#8F8F8F", fontSize:12}}>Film</Text>
                <Text style={{color: "#8F8F8F", fontSize:12}}>Comédie, Drame</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={{color: "#8F8F8F", fontSize:12}}>En salle</Text>
                <Image
                style={{marginTop:15, maxWidth: 25, maxHeight: 25, textAlign: 'left'}}
                source={require('../../assets/triangle.png')}
                />
              </View>
            </View>
            <View style={{flexDirection:"row", backgroundColor: "white", borderRadius:20, padding: 15, justifyContent:"space-between", marginTop:20}}>
              <View>
                <Text style={{color: "#FF5D5D", fontSize:16, fontWeight:"bold", textTransform:"uppercase"}}>The Man from Toronto</Text>
                <Text style={{color: "#8F8F8F", fontSize:12}}>Film</Text>
                <Text style={{color: "#8F8F8F", fontSize:12}}>Action, Comédie, Thriller</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={{color: "#8F8F8F", fontSize:12}}>En salle</Text>
                <Image
                style={{marginTop:15, maxWidth: 25, maxHeight: 25}}
                source={require('../../assets/triangle.png')}
                />
              </View>
            </View>
            <View style={{flexDirection:"row", backgroundColor: "white", borderRadius:20, padding: 15, justifyContent:"space-between", marginTop:20}}>
              <View>
                <Text style={{color: "#FF5D5D", fontSize:16, fontWeight:"bold", textTransform:"uppercase"}}>The Terminal List</Text>
                <Text style={{color: "#8F8F8F", fontSize:12}}>Série</Text>
                <Text style={{color: "#8F8F8F", fontSize:12}}>Action & Adventure, Drame</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={{color: "#8F8F8F", fontSize:12}}>Prime video</Text>
                <Image
                style={{marginTop:15, maxWidth: 25, maxHeight: 25 }}
                source={require('../../assets/triangle.png')}
                />
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

