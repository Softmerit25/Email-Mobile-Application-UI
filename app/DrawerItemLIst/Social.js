import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
const Social = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Social",
            headerStyle: {backgroundColor: "#8b0000"},
            headerTitleStyle: {color:"#fff"},
            headerTintColor: "black",
            headerLeft: ()=>(
                <View style={{marginLeft: 10,}}>
                    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                        <Icon name="menu" size={25} color="#fff" />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: ()=>(
                <View style={{flexDirection: "row",
                justifyContent: "space-between",
                width: 60,
                marginRight: 10,
                
                }}>
                    <TouchableOpacity>
                        <Icon name="search" size={25} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="new-message" type="entypo" size={25} color="#fff" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])
    return (
        <View style={{marginTop: 50,}}>
            <Text>Social mails goes here.</Text>
        </View>
    )
}

export default Social

const styles = StyleSheet.create({})
