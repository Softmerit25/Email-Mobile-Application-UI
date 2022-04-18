import React from 'react'
import { SafeAreaView, View, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import MainStackNavigator from "./StackNavigation"
import Social from '../DrawerItemLIst/Social';
import Promotions from '../DrawerItemLIst/Promotions';
import Sent from '../DrawerItemLIst/Sent';
import Outbox from '../DrawerItemLIst/Outbox';



const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
   return(
    <Drawer.Navigator initialRouteName="Home"
     drawerContent={(props)=>{
     return (
        <SafeAreaView>
         <View style={{alignItems:"center",
               justifyContent:"center", 
               marginTop: 30,}}> 
            <Text style={{fontSize: 25, 
               fontWeight: "bold", 
               letterSpacing: 2, 
               color: "#8b0000",}}>MyMail</Text>
         </View>
         <DrawerItemList {...props}/>
        </SafeAreaView>
     )
     }}
     >
<Drawer.Screen name="Primary" component={MainStackNavigator} options={{headerShown:false,
   drawerIcon:()=>(
         <Icon name="home" type="entypo" size={25} />
   )
   }}/>
   <Drawer.Screen name="Social" 
   component={Social} 
   options={{
   drawerIcon:()=>(
         <Icon name="user" type="entypo" size={25} />
   )
   }}/>
   <Drawer.Screen name="Promotions" 
   component={Promotions} 
   options={{
   drawerIcon:()=>(
         <Icon name="tag" type="entypo" size={25} />
   )
   }}/>
    <Drawer.Screen name="Sent" 
   component={Sent} 
   options={{
   drawerIcon:()=>(
         <Icon name="paper-plane" type="entypo" size={25} />
   )
   }}/>
    <Drawer.Screen name="Outbox" 
   component={Outbox} 
   options={{
   drawerIcon:()=>(
         <Icon name="box" type="entypo" size={25} />
   )
   }}/>
    </Drawer.Navigator>
   );
}

export default DrawerNavigator;