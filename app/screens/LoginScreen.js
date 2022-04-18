import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';



//importing HeaderRef Screen
import HeaderRef from '../components/HeaderRef';

const LoginScreen = ({navigation}) => {
    const [useremail, setuseremail]= useState('');
    const [userpassword, setuserpassword]= useState('');

    const Verify =()=>{
    if(useremail.length==0 || userpassword.length==0){
        alert('Required filled');
    }else{
        navigation.navigate('HomeScreen');
    }
    }

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View>
            <HeaderRef/>
            
            <Text style={{
                marginTop: 50,
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'normal',

            }}>SigIn your Account</Text>
            <View style={{alignItems:"center", justifyContent:"center"}}>
                <TextInput style={{padding: 18, width: 300, marginTop: 10, borderBottomWidth: 1, borderBottomColor:"#888"}}
                type="text"
                placeholder="Enter your Eamil"
                value={useremail}
                onChangeText={(text)=>setuseremail(text)}
                />
                 <TextInput style={{padding: 18, width: 300, marginTop: 10, borderBottomWidth: 1, borderBottomColor:"#888"}}
                type="text"
                placeholder="Enter your Password"
                value={userpassword}
                secureTextEntry
                onChangeText={(text)=>setuserpassword(text)}
                />
                <View style={{marginTop: 20, width: 200,}}>
                <Button  title="Sigin" onPress={Verify} type="clear" color="#8b0000" />
                </View>
                
            </View>
            <TouchableOpacity>
                <View style={{marginTop: 30, alignItems: "center", justifyContent: "center"}}><Text>Forgot Password?</Text></View>
            </TouchableOpacity>
            
            
        </View>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
