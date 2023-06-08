import { View, Text, ScrollView, TouchableOpacity, Button, Image, Alert, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon, { Icons } from '../components/Icons';
import { DATA } from '../Data/data';


const ProductDetailScreen = () => {
    const renderedHotels = DATA.slice(2, 5);
    const renderedHotels1 = DATA.slice(0, 1);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View style={{ padding: 24, gap: 8 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Icon
                            type={Icons.AntDesign}
                            name="arrowleft"
                            color={"black"}
                            size={24}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Recent Booking</Text>
                    </View>
                </View>

                <View>
                    <View >
                        {renderedHotels1.map((hotel) => (
                            <View style={{ borderRadius: 10, backgroundColor: '#fefefe', margin: 10, flexDirection: 'row' }}>
                                <View key={hotel.id}>
                                    <View style={{ margin: 10, }}>
                                        <Image source={{ uri: hotel.imageUrl }} style={{ width: 50, height: 50, borderRadius: 10 }} />
                                        <View>
                                            <Text style={{}}>{hotel.name}</Text>
                                            <Text>{hotel.location}</Text>
                                            <Text>${hotel.price} per night</Text>
                                            <View>
                                                {/* <Button
                                                    title="Payment completed"
                                                    color="#0b131b"
                                                    onPress={() => Alert.alert('Right button pressed')}
                                                    style={{ borderRadius: 15 }}
                                                /> */}

                                                <Button title="Press Me" onPress={() => console.log('Button pressed!')} />
                                            </View>

                                            {/* < ><Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}></Text> */}
                                        </View>
                                    </View>
                                </View>
                            </View>

                        ))}
                    </View>

                </View>


                <View>
                    <View style={{ marginVertical: 24 }}>
                        <Text>History</Text>
                    </View>


                    <View >
                        {renderedHotels.map((hotel) => (
                            <View style={{ borderRadius: 10, backgroundColor: '#fefefe', margin: 10, flexDirection: 'row' }}>
                                <TouchableOpacity key={hotel.id}>
                                    <View style={{ margin: 10, }}>
                                        <Image source={{ uri: hotel.imageUrl }} style={{ width: 50, height: 50, borderRadius: 10 }} />
                                        <View>
                                            <Text style={{}}>{hotel.name}</Text>
                                            <View>
                                                <Text>{hotel.location}</Text>
                                                <Icon
                                                    type={Icons.AntDesign}
                                                    name="star"
                                                    color={"#cfbd58"}
                                                    size={15}
                                                />
                                                <Text>{hotel.ratings}</Text>
                                            </View>


                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        ))}
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default ProductDetailScreen


const styles = StyleSheet.create({
    button: {
        // backgroundColor: 'blue',
        // borderRadius: 15,
        // padding: 10,
        // alignItems: 'center',
    },
    buttonText: {
        // color: 'white',
        // fontSize: 16,
        // fontWeight: 'bold',
    },
});
