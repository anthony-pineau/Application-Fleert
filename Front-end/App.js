import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Theme from './theme/index';

import Home from './screens/home';
import Settings from './screens/settings';
import Setting from './screens/settings/setting';
import Match from './screens/match';
import Message from './screens/messages';
{/* Import Register */}

import Log from './screens/login';
import Birthday from './screens/login/register/Brithday';
import City from './screens/login/register/City';
import Email from './screens/login/register/Email';
import Gender from './screens/login/register/Gender';
import Movies from './screens/login/register/Movies';
import Name from './screens/login/register/Name';
import PhoneNumber from './screens/login/register/PhoneNumber';
import Picture from './screens/login/register/Picture';
import Series from './screens/login/register/Series';
import Views from './screens/login/register/View';
import Password from './screens/login/register/Password';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function TabNav({setisLoggedIn}) {
  return (
    <Tab.Navigator

          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'film-outline'
                  : 'film-outline';
              } else if (route.name === 'Setting') {
                iconName = focused ? 'ios-list' : 'ios-list';
              } else if (route.name === 'Matchs') {
                iconName = focused ? 'heart-outline' : 'heart-outline';
              } else if (route.name === 'Messages') {
                iconName = focused ? 'chatbubbles-outline' : 'chatbubbles-outline';
              }


              // You can return any component that you like here!
              return <View style={{borderColor:color, borderWidth:5, borderRadius: 100, paddingBottom: 5, paddingTop: 5, paddingLeft:6, paddingRight:6}}><Ionicons name={iconName} size={size} color={color}/></View>;
            },
            tabBarActiveTintColor: '#FF5D5D',
            tabBarInactiveTintColor: '#B3B3B3',
          })}
        >
          <Tab.Screen options={{ headerShown: false, tabBarShowLabel: false}} name="Home" component={Home} />


          <Tab.Screen name="Matchs" options={{ headerShown: false, tabBarShowLabel: false}}>
            {props => <Match {...props} setisLoggedIn={setisLoggedIn}/>}
          </Tab.Screen>

          <Tab.Screen name="Messages" options={{ headerShown: false, tabBarShowLabel: false}}>
            {props => <Message {...props} setisLoggedIn={setisLoggedIn}/>}
          </Tab.Screen>
    </Tab.Navigator>
  );
}

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
          >
          {isLoggedIn ? (
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="TabNav">
                {props => <TabNav {...props} setisLoggedIn={setisLoggedIn}/>}
              </Stack.Screen>
              <Stack.Screen options={{ headerShown: false,}} name="Settings" component={Settings} />
              <Stack.Screen name="Setting">
                {props => <Setting {...props} setisLoggedIn={setisLoggedIn}/>}
              </Stack.Screen>
            </Stack.Group>
          ) : (
            <Stack.Group screenOptions={{ headerShown: false }}>
            
              <Stack.Screen name="Login">
                {props => <Log {...props} setisLoggedIn={setisLoggedIn}/>}
              </Stack.Screen>
              <Stack.Screen options={{ headerShown: false,}} name="Birthday" component={Birthday} />
              <Stack.Screen  name="City" component={City} />
              <Stack.Screen options={{ headerShown: false,}} name="Email" component={Email} />
              <Stack.Screen options={{ headerShown: false,}} name="Gender" component={Gender} />
              <Stack.Screen options={{ headerShown: false,}} name="Movies" component={Movies} />
              <Stack.Screen options={{ headerShown: false,}} name="Name" component={Name} />
              <Stack.Screen options={{ headerShown: false,}} name="PhoneNumber" component={PhoneNumber} />
              <Stack.Screen options={{ headerShown: false,}} name="Picture" component={Picture} />
              <Stack.Screen options={{ headerShown: false,}} name="Series" component={Series} />
              <Stack.Screen options={{ headerShown: false,}} name="Views" component={Views} />
              <Stack.Screen options={{ headerShown: false,}} name="Home" component={Home} />
              <Stack.Screen options={{ headerShown: false,}} name="Password" component={Password} />
            </Stack.Group>
          )}
          </Stack.Navigator>
        </NavigationContainer>
        
      </SafeAreaView>
      </SafeAreaProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;