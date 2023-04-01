import { View, StyleSheet, Pressable, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text,Image, Button } from '@rneui/themed';
import { fonts } from '@rneui/base';

export default function ProductDetailScreen({ route, navigation }) {

    const {product_id} = route.params;
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={{uri: "https://i.imgur.com/agofhX4.jpg"}}
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
                    <Text h2 style={{marginBottom: 12}}>Moon & Smith Floral Notebook</Text>
                    <Pressable style={styles.heartContainer}>
                        <Icon 
                            name="heart-outline"
                            style={styles.heart}
                        />
                    </Pressable>
                </View>
                <Text h3 style={{marginBottom: 30}}>$24.99</Text>
                <Text h4 style={{marginBottom: 8}}>Description</Text>
                <Text style={{marginBottom: 40}}>Mono Ink Pen is the most elegant and stylish item that our customers love. The grip is made out of redwood and refined with mesh cut. {"\n"}The product does not include an ink.</Text>
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
        // borderRadius: 50
        width: 50,
        height: 50,
        borderRadius: 50,
        textAlign: "center",
        // backgroundColor: "red",
        marginTop: 30,
        marginLeft: 10,
        alignItems: "center"
    },
    backIcon: {
        backgroundColor: "#fff",
        // alignSelf: "center",
        padding: 10,
        borderRadius: 50,
        fontSize: 32,
        // textAlignVertical: "center"
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
    },
    product_title: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    heart: {
        fontSize: 25,
        // backgroundColor: "red",
        padding: 7,
        paddingLeft: 9,
        borderRadius: 50,
        borderWidth: 1,
        // textAlign: "center",
        alignSelf: "center",
        // paddingEnd: 0,
        textAlignVertical: "center"
    },
});