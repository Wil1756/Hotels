import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import Icon, { Icons } from '../components/Icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
    {
        id: '1',
        name: 'Golden Tulip Canaan Hotel',
        location: '12B Kafu Road',
        price: 70,
        ratings: 4.5,
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/238540877.jpg?k=7b105363b19348970e0c665b1984c5abbd86c70cf88783f834ddaf3b6ed539a7&o=&hp=1',
        details: `A stay at Golden Tulip Canaan Kampala places you in the heart of Kampala, a 1-minute drive from Uganda Golf Course and 6 minutes from The Parliament of the Republic of Uganda. Featured amenities include a business center, express check-in, and express check-out. This hotel has 7 meeting rooms available for events. Free self parking is available onsite.`,
    },

    {
        id: '2',
        name: 'Kampala Serena Hotel',
        location: 'Kintu Road',
        price: 90,
        ratings: 4.5,
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/02/83/d6/the-pool.jpg?w=1100&h=-1&s=1',
        details: `The Kampala Serena Hotel is an oasis of cool and green, with a secure environment ideally located in an excellent location in the heart of Kampala, which is the focal point of national, regional, corporate, political and social life.`,
    },
    {
        id: '3',
        name: 'Speke Resort Munyonyo',
        location: 'Munyonyo Rd',
        price: 100,
        ratings: 4.6,
        imageUrl: 'https://www.spekeresort.com/wp-content/uploads/2019/04/munyonyo-commonwealth-swimming-pool-01.jpg',
        details: `Speke Resort & Conference Centre, conveniently located only 12 km from the centre of Kampala, offers you the ultimate in luxury accommodation and leisure facilities together with the finest conference and business meeting location in East Africa`,
    },
    {
        id: '4',
        name: 'Sheraton Kampala Hotel',
        location: 'Ternan Avenue',
        price: 120,
        ratings: 3.5,
        imageUrl: 'https://www.africanmeccasafaris.com/wp-content/uploads/sheratonkampalahotel2.jpg',
        details: `A stay at Sheraton Kampala Hotel places you in the heart of Kampala, within a 15-minute walk of Embassy of France and The Parliament of the Republic of Uganda. This 4-star hotel is 0.8 mi (1.2 km) from Uganda Golf Course and 0.9 mi (1.4 km) from Embassy of Sweden. Make yourself at home in one of the 236 air-conditioned rooms featuring minibars and flat-screen televisions`,
    },
    {
        id: '5',
        name: 'Fairway Boutique Hotel',
        location: '1 Kafu Road Nakaseroß',
        price: 120,
        ratings: 3.7,
        imageUrl: 'http://photos.hotelbeds.com/giata/bigger/57/574836/574836a_hb_a_001.jpg',
        details: `Rated the best location in Kampala, Fairway Hotel is a boutique property that boasts lush gardens spread over four blocks. Located across from the Uganda Golf Course, guests can enjoy a tranquil oasis within a few minutes' walk from shopping, nightlife, with an amazing Ugandan Cultural night ever Wednesday and the bustling city.`,
    },
    {
        id: '6',
        name: 'Latitude 0 Degrees Hotel',
        location: '64 66 Kyadondo',
        price: 120,
        ratings: 4.0,
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/235088165.jpg?k=4177f97b999e12b23a9ea9a5f98ba0c99302a172c59fbb38ed2ef18373545aec&o=&hp=1',
        details: `We’re a boutique hotel with 47 guest rooms, and restaurants & bars with food & drinks from all corners of the world. We’re a gym, spa and swimming pools for fitness & relaxation. We’re a socialising & networking centre with rooftop bar, private dining & entertaining spaces.`,
    },
    {
        id: '7',
        name: 'Pangolin Nest Boutique Hotel',
        location: 'Kabali Kaggwa Lane Plot 118',
        price: 120,
        ratings: 4.3,
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/402233734.jpg?k=56c1d7244ac71a23a9383a9b6bbe62dee550734789dc76ca8c4e5208efc1bb0b&o=&hp=1',
        details: `Discover the captivating Pangolin Nest Boutique Hotel, nestled in all green atop one of Kampala’s oldest hills, Makindye. Pangolin was named after the endangered spec “The Pangolin.” It is 2mins away from Latitude 0 degrees Hotel and in close proximity to the city center. Our quiet heaven accommodation is surrounded by beautiful trees, flowers with two terrace gardens, it is very quiet and one can hear the chirpping sounds of the birds.`,
    },
    {
        id: '8',
        name: 'Kabira Country Club',
        location: 'Plot 63, Old Kira Rd Bukoto',
        price: 70,
        ratings: 4.1,
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/35/52/3d/swimming-pool.jpg?w=1400&h=-1&s=1',
        details: `In the Bantu languages of Uganda, 'Kabira' translates as ‘little forest’. It is home to several rare species of flora and tropical birds, such as the African Grey Parrot and Blue Turncoats, and we ardently preserve this natural haven and wildlife habitat.`,
    },
];

const AVATAR_URL =
    "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";

const HomeScreen = ({ }) => {
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
                        gap: 12,
                        marginTop: -40,
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
                            style={{ width: 40, aspectRatio: 1, borderRadius: 40 }}
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
                                name="bed"
                                color={"white"}
                                size={20}
                            />

                            <Text style={{
                                fontSize: 12,
                                color: 'white'
                            }}>Room's</Text>
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

                <View style={{
                    paddingVertical: 24,
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "400"
                        }}>For You</Text>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: 200
                            }}>see all</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 200
                        }}>Our Recommended Place to Stay</Text>
                    </TouchableOpacity>
                </View>
                {/* For images section */}
                <View>
                    <ScrollView >
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={DATA}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return <Item imageUrl={item.imageUrl} name={item.name} location={item.location} ratings={item.ratings} price={item.price} />;
                            }}
                        />

                    </ScrollView>
                </View>

            </View>
        </SafeAreaView >

    );
}


export default HomeScreen;

const Item = ({ imageUrl, name, location, ratings, price }) => (
    <View>
        <TouchableOpacity>
            <Image style={{
                borderRadius: 5,
                height: 170,
                width: 220,
                marginHorizontal: 10
            }}
                source={{ uri: imageUrl }}
            />
            <Text style={{
                marginHorizontal: 20

            }}>{name}</Text>
            <View>
                <Text style={{
                    marginHorizontal: 20
                }}>{location}</Text>
                <View>
                    <Icon
                        type={Icons.AntDesign}
                        name="star"
                        color={"#cfbd58"}
                        size={15}
                    />
                    <Text style={{
                    }}>{ratings}</Text>
                    <Text>${price} Per Night</Text>
                </View>

            </View>
        </TouchableOpacity>
    </View>
);