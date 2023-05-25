import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabsNavigation from './TabsNavigation';
import ProductDetailScreen from '../screens/ProductDetail';

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name='TabsStack' component={TabsNavigation} options={{
                headerShown: false
            }} />
            <RootStack.Screen name='Details' component={ProductDetailScreen} options={{ headerShown: false }} />
        </RootStack.Navigator>
    )
}

export default RootNavigation;