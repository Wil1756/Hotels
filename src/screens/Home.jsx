import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import Icon, { Icons } from '../components/Icons';
import { SafeAreaView } from 'react-native-safe-area-context';



const AVATAR_URL =
    "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View style={{
                padding: 24,
                gap: 8
            }}
            >
                <View style={{
                    flexDirection: 'row',
                }}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={{
                            fontSize: 14,
                        }}>Current Location</Text>
                        <Text style={{
                            fontSize: 10
                        }}>Washington</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        // alignItems: 'flex-end',
                        gap: 12,
                        marginTop: -40,
                        // backgroundColor: 'red',
                    }}>

                        <Icon
                            type={Icons.MaterialCommunityIcons}
                            name="bell-badge"
                            color={"#9a8d94"}
                            size={24}
                        />

                        <Image
                            source={{
                                uri: AVATAR_URL,
                            }}
                            style={{ width: 45, aspectRatio: 1, borderRadius: 45 }}
                            resizeMode="cover"
                        />

                    </TouchableOpacity>

                </View>

                <View>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                    }}>Find Your Desired Hotel</Text>
                </View>

                <View>
                    <SearchBar />
                </View>

                <View style={{
                    paddingVertical: 24
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "400"
                    }}>Categories</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={{
                        borderRadius: 10,
                        backgroundColor: 'black',
                        width: 65,
                        height: 45,
                    }}>
                        <TouchableOpacity style={{
                            flex: 1,
                            alignItems: 'center',
                            marginTop: 5
                        }}>
                            <Icon
                                type={Icons.FontAwesome}
                                name="flag"
                                color={"white"}
                                size={20}
                            />

                            <Text style={{
                                fontSize: 12,
                                color: 'white'
                            }}>Hub's</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{
                        borderRadius: 10,
                        backgroundColor: '#E9EBF1',
                        width: 65,
                        height: 45,
                    }}>
                        <TouchableOpacity style={{
                            flex: 1,
                            alignItems: 'center',
                            marginTop: 5
                        }}>
                            <Icon
                                type={Icons.MaterialCommunityIcons}
                                name="airplane"
                                color={"black"}
                                size={20}
                            />

                            <Text style={{
                                fontSize: 12,
                                color: 'black'
                            }}>Transport</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        borderRadius: 10,
                        backgroundColor: '#E9EBF1',
                        width: 65,
                        height: 45,
                    }}>
                        <TouchableOpacity style={{
                            flex: 1,
                            alignItems: 'center',
                            marginTop: 5
                        }}>
                            <Icon
                                type={Icons.MaterialIcons}
                                name="restaurant-menu"
                                color={"black"}
                                size={20}
                            />

                            <Text style={{
                                fontSize: 12,
                                color: 'black'
                            }}>Food's</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        borderRadius: 10,
                        backgroundColor: '#E9EBF1',
                        width: 65,
                        height: 45,
                    }}>
                        <TouchableOpacity style={{
                            flex: 1,
                            alignItems: 'center',
                            marginTop: 5
                        }}>
                            <Icon
                                type={Icons.Entypo}
                                name="home"
                                color={"black"}
                                size={20}
                            />

                            <Text style={{
                                fontSize: 12,
                                color: 'black'
                            }}>Home</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>

    );
}


export default HomeScreen;

// const Card = () => {
//     return (

//     )
// }



{/* <View style={{
    borderRadius: 10,
    backgroundColor: '#E9EBF1',
    width: 65,
    height: 45,
}}>
    <Icon
        type={Icons.MaterialCommunityIcons}
        name="airplane"
        color={"black"}
        size={20}
    />
    <Text style={{
        fontSize: 12,
    }}>Hub's</Text>
</View> */}