import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



//Importing Screens
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './app/navigations/DrawerNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
      
     // <StatusBar style="auto" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
