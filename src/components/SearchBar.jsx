import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <Ionicons name="search" style={styles.iconStyle} />
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.searchInput}
                        value={term}
                        placeholder="Where do you want to go ?"
                        onChangeText={onTermChange}
                        onEndEditing={onTermSubmit}
                    />
                </View>

                <TouchableOpacity styles={styles.searchBtn}>
                    <Ionicons name="options-outline" style={styles.searchBtnImage} size={38} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 24,
        alignSelf: "center",
        marginHorizontal: 15,
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: 'white',
        marginRight: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        height: "100%",
        flexDirection: "row",
    },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
        flex: 1,
        fontSize: 12,
    },
    searchBtn: {
        width: 55,
        height: "100%",
        backgroundColor: 'black',
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBtnImage: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'black',
        padding: 5,

    },

});

export default SearchBar;
