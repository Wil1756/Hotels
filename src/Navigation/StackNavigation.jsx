import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartUpScreen from '../screens/StartUp';
import HomeScreen from '../screens/Home';
import CheckoutScreen from '../screens/Checkout';
import PaymentScreen from '../screens/Payment';
import ProductDetailScreen from '../screens/ProductDetail';
import CartScreen from '../screens/Cart';
import TabsNavigation from './TabsNavigation';


const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='StartUp'>
            <Stack.Screen name='StartUp' component={StartUpScreen} />
            <Stack.Screen name='Tabs' component={TabsNavigation} />
        </Stack.Navigator>
    );
};

const ProductStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Details' component={ProductDetailScreen} />
            <Stack.Screen name='CheckoutProduct' component={CheckoutScreen} />
            <Stack.Screen name='PaymentProduct' component={PaymentScreen} />
        </Stack.Navigator>
    );
};

const CartStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='CheckoutCart' component={CheckoutScreen} />
            <Stack.Screen name='PaymentCart' component={PaymentScreen} />
        </Stack.Navigator>
    );
};

export { MainStack, ProductStack, CartStack };