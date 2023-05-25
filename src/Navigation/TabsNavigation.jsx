import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CartStack, ProductStack } from './StackNavigation';
import ProfileScreen from '../screens/Profile';
import ProductDetailScreen from '../screens/ProductDetail';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CustomBottomTabs from '../components/CustomBottomTabs';



const TabsStack = createBottomTabNavigator();

const getTabVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName?.includes('Checkout') || routeName?.includes('Payment')) {
        return 'none';
    }
    return 'flex';
}


const TabsNavigation = () => {
    return (
        <TabsStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <TabsStack.Screen
                name='HomeTab'
                component={ProductStack}
                options={({ route }) => ({
                    tabBarStyle: { display: getTabVisibility(route) },
                    tabBarShowLabel: false,
                    tabBarButton: (props) => <CustomBottomTabs {...props} item={0} />
                })}
            />
            <TabsStack.Screen
                name='ProfileTab'
                component={ProfileScreen}
                options={({ route }) => ({
                    tabBarStyle: { display: getTabVisibility(route) },
                    tabBarShowLabel: false,
                    tabBarButton: (props) => <CustomBottomTabs {...props} item={1} />
                })}
            />
            <TabsStack.Screen
                name='CartTab'
                component={CartStack}
                options={({ route }) => ({
                    tabBarStyle: { display: getTabVisibility(route) },
                    tabBarShowLabel: false,
                    tabBarButton: (props) => <CustomBottomTabs {...props} item={2} />
                })}
            />
            <TabsStack.Screen
                name='ProductDetailTab'
                component={ProductDetailScreen}
                options={({ route }) => ({
                    tabBarStyle: { display: getTabVisibility(route) },
                    tabBarShowLabel: false,
                    tabBarButton: (props) => <CustomBottomTabs {...props} item={3} />
                })}
            />
        </TabsStack.Navigator>
    )
}


export default TabsNavigation;