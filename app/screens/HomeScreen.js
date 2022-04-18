import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ScrollView, Button, Dimensions} from 'react-native'
import { Icon, Card } from 'react-native-elements'



const HomeScreen = ({navigation}) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Primary",
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
    }, [])
    return (
        <ScrollView>
        <TouchableOpacity>
        <Card>  
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>
        </TouchableOpacity>

        <TouchableOpacity>
        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>
    </TouchableOpacity>
        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>


        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>


        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>
        
        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>
        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>

        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>


        <Card>
        <View style={{flexDirection:"row",
        justifyContent:"space-between"}}>
        <Icon style={{borderWidth: 1, padding: 10, borderRadius: 80/2, 
        marginRight:5, }} name="user" type="entypo" size={25} />
        <Text style={{fontSize: 16,
        }}>Ramit Sethi{"\n"}Your responses to the Rich Life Survey{"\n"}I sent out a Rich Life survey. I want to s...</Text>
        <Icon name="star-outlined" color="orange" type="entypo" size={25} />
        </View>
        </Card>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
