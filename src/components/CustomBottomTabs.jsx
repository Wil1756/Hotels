import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TabsClr } from './constants/Colors';
import Icon, { Icons } from './Icons';


const TabArr = [
    {
        // label: 'Home',
        type: Icons.Entypo,
        name: 'home',
    },
    {
        // label: 'Profile',
        type: Icons.Ionicons,
        name: 'person',
    },
    {
        // label: 'Cart',
        type: Icons.MaterialIcons,
        name: 'explore',
    },
    {
        // label: 'Details',
        type: Icons.MaterialIcons,
        name: 'favorite',
    },
];


const CustomTabsBtn = ({ item, onPress, accessibilityState }) => {
    const focused = accessibilityState.selected;

    const iconRef = useRef(null);
    const textRef = useRef(null);


    useEffect(() => {
        if (focused) {
            iconRef.current.animate({ 0: { scale: 0.5 }, 1: { scale: 1 } });
            textRef.current.animate({ 0: { scale: 0.5 }, 1: { scale: 1 } });
        } else {
            iconRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0.9 } });
            textRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0.5 } });
        }
    }, [focused]);

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: TabsClr.primary }}>
            <Pressable
                onPress={onPress}
                style={{
                    flex: focused ? 1 : 0.8,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View >
                    <Animatable.View
                        ref={iconRef}
                        style={{
                            backgroundColor: focused ? TabsClr.alphaClr : TabsClr.primary,
                            borderRadius: 5,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 5,
                                borderBottomWidth: 2,
                                borderBottomColor: focused ? TabsClr.inFocus : TabsClr.primary,
                                backgroundColor: focused ? null : TabsClr.primary,
                            }}>
                            <Icon
                                type={TabArr[item].type}
                                name={TabArr[item].name}
                                color={focused ? TabsClr.inFocus : TabsClr.OutOfFocus}
                            />
                            <View style={{ flex: 1 }}>
                                <Animatable.View ref={textRef}>
                                    {focused && (
                                        <Text style={{ color: TabsClr.inFocus, paddingHorizontal: 4 }}>
                                            {TabArr[item].label}
                                        </Text>
                                    )}
                                </Animatable.View>
                            </View>
                        </View>
                    </Animatable.View>
                </View>
            </Pressable>
        </View>
    );
};

export default CustomTabsBtn;