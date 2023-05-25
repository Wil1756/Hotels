import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleTextChange = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
    };

    return (
        <View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <Ionicons name="search" style={styles.iconStyle} />
                    <TextInput
                        style={styles.searchInput}
                        value={searchTerm}
                        onChangeText={handleTextChange}
                        placeholder="Where do you want to go ?"
                    />
                </View>

                <TouchableOpacity styles={styles.searchBtn}>
                    <Ionicons name="options-outline" style={styles.searchBtnImage} size={48} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 25,
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
        // tintColor: 'white',
        borderRadius: 15,
        backgroundColor: 'black',
        // justifyContent: 'center',
    },

});

export default SearchBar;
