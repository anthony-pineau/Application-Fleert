
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Theme from '../../theme/index';

function Home({ navigation }) {
  return (
    <View style={{flex:1}}>
      <View style={Theme.statusBar} />
      <View style={{height:80, paddingTop: 10, flexDirection: "column", backgroundColor: 'white'}}>
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
        <ImageBackground source={require('../../assets/gm.jpg')} style={styles.imgBackground}>
          <LinearGradient
            colors={["#fff", "transparent"]}
            start={{x: 0.0, y: 0.2}}
          end={{x: 0.0, y: 1.0}}
            style={styles.linearGradient}
          >
          </LinearGradient>

          <LinearGradient 
          colors={["transparent", "black"]}
          start={{x: 0.0, y: 0.2}}
        end={{x: 0.0, y: 1.0}}
            style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', width: '100%',height: '100%', opacity: 0.9,}}
          >
            <View style={{width: '80%'}}>
              <Text style={styles.title} >Game of thrones</Text>
              <Text style={styles.text} >Série</Text>
              <Text style={styles.text} >Science-Fiction & Fantastique, Drame, Action & Adventure</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '80%', marginTop: '10%', marginBottom: '2%'}}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/btnDislike.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/btnAdd.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/btnLike.png')}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
  },
  linearGradient: {
    width: '100%',
    height: '20%',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
  }
});

export default Home;