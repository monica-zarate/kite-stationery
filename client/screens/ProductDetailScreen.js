import { useState } from 'react';
import { View, StyleSheet, Pressable, ImageBackground, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, Button, } from '@rneui/themed';

import Header from '../components/Header';

export default function ProductDetailScreen({ route, navigation }) {
    const [fave, setFave] = useState(false);
    const toggleFave = () => {setFave(!fave)};
    
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Header/>
            <ImageBackground 
                source={{uri: product.image}}
                style={styles.product_img}
            >
                <Pressable
                    title={'Go Back'}
                    onPress={() => navigation.goBack()}
                    style={styles.backContainer}
                >
                    <Icon name="arrow-back-outline" style={styles.backIcon}  />
                </Pressable>
            </ImageBackground>
            <View style={styles.product_container}>
                <View style={styles.product_title}>
                    <Text h2 style={{marginBottom: 12, maxWidth:"80%"}}>{product.name}</Text>
                    <Pressable onPress={() => toggleFave()}>
                        <Icon 
                            name={fave === true ? "heart" : "heart-outline"}
                            color={fave === true ? "red" : "#878787"}
                            style={[
                                styles.heart,
                                {borderColor: fave === true ?  "red" : "#878787",}
                            ]}
                        />
                    </Pressable>
                </View>
                <Text h3 style={{marginBottom: 30}}>${product.price}</Text>
                <Text h4 style={{marginBottom: 8}}>Description</Text>
                <Text style={{marginBottom: 40}}>{product.description}</Text>
                <Button
                    containerStyle={{
                        width: "100%",
                        borderRadius: 6,
                    }}
                    buttonStyle={{
                        borderRadius: 6,
                        backgroundColor: "#FF5A00",
                        paddingVertical: 20,
                    }}
                    titleStyle={{ fontFamily: 'Inter_700Bold', fontSize: 16, textTransform: "uppercase" }}
                    title={'Add to Cart'}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    backContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        textAlign: "center",
        marginTop: 30,
        marginLeft: 10,
        alignItems: "center"
    },
    backIcon: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 50,
        fontSize: 32,
    },
    product_img: {
        width: "100%",
        height: 400,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    },
    product_container: {
        marginHorizontal: 24,
        marginVertical: 30,
        maxWidth: "100%"
    },
    product_title: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    heart: {
        fontSize: 25,
        padding: 7,
        paddingLeft: 9,
        borderRadius: 50,
        borderColor: "#878787",
        borderWidth: 1,
        alignSelf: "center",
        textAlignVertical: "center",
    },
});