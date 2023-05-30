import React from 'react'
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";

const StartUpScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View>
                <Text>We bring</Text>
                <Text>The Best Hotels For You</Text>
            </View>

            <View>
                <Image source={require('../../assets/Serena.png')} style={{ width: 200, height: 200, alignSelf: 'center', opacity: 0.8 }} />
                <Image source={require('../../assets/sheraton.png')} style={{ width: 200, height: 200, alignSelf: 'center', opacity: 0.8 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ height: 4, backgroundColor: 'black', width: '30%' }} />
                <View style={{ height: 4, backgroundColor: 'black', width: '30%' }} />
                <View style={{ height: 4, backgroundColor: 'blue', width: '10%' }} />
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                    style={{ backgroundColor: 'black', padding: 10, borderRadius: 10, marginTop: 15, width: '50%' }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Start Your Search</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


export default StartUpScreen;