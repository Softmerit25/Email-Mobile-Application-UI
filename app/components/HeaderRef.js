import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native'

const {width,height} =Dimensions.get('window');

const HeaderRef = () => {
    return (
        <SafeAreaView style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <View style={{
            width: width,
            height: height/4,
            backgroundColor:'#8b0000'
        }}>
            <Text style={{
                width: 150,
                height: 70,
                display: 'flex',
                marginTop: 50,
                left: width/3,
                fontSize: 25,
                fontWeight: 'bold',
                color: '#fff',
            }}>Mailing App</Text>
        </View>
        </SafeAreaView>
    )
}

export default HeaderRef

const styles = StyleSheet.create({})
