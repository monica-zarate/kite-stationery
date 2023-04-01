import { View, StyleSheet, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, Image } from '@rneui/themed';

import Header from '../components/Header';
// This page will make an API call to retrieve the filtered results based on the brand_id, category_id

export default function ResultsScreen({ route, navigation }) {

    const { brand_id, category_id } = route.params;
    console.log(route.params);

    const renderItem = ({item}) => (
        <Pressable 
            style={styles.product_card}
            onPress={() => navigation.navigate('Product Detail', {
                product_id: item.id,
            })}
        >
            <Image 
                source={{uri: item.image}}
                style={styles.product_img}
            />
            <Text h4 style={styles.product_name}>{item.name}</Text>
            <Text>{item.price}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Header />
            <Pressable
                title={'Go Back'}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-back-outline" style={styles.back}  />
            </Pressable>
            <Text h1 style={{marginVertical: 24}}>Notebook</Text>
            <FlatList 
                ListHeaderComponent={
                    <>
                        {/* <Pressable
                            title={'Go Back'}
                            onPress={() => navigation.goBack()}
                        >
                            <Icon name="arrow-back-outline" style={styles.back}  />
                        </Pressable> */}
                    </>
                }
                data={DATA.products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between'}}
            />
            {/* <Text>This screen will hold the results of the search or filtering</Text> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        paddingHorizontal: 24,
    },
    back: {
        fontSize: 24
    },
    product_card: {
        width: "45%",
        marginBottom: 30,
        // backgroundColor: "salmon"
        // flex: 1
    },
    product_img: {
        height: 200,
        width: "100%",
        marginBottom: 13,
        borderRadius: 6,
        aspectRatio: 1.27
    },
    product_name: {
        marginBottom: 6
    }
});

const DATA = {
    count: 6,
    products: [
        {
            id: "1",
            name: "Moon & Smith Floral Notebook",
            description: "A simple notebook made with the same bookbinding technique as a paperback novel. It also features a red thread bookmark to keep your place.",
            price: "24.99",
            image: "https://i.imgur.com/agofhX4.jpg",
            category_id: "1",
            category_name: "notebook",
            brand_id: "1",
            brand_name: "Chroma Lumix"
        },
        {
            id: "2",
            name: "Moon & Smith Floral Notebook",
            description: "A simple notebook made with the same bookbinding technique as a paperback novel. It also features a red thread bookmark to keep your place.",
            price: "24.99",
            image: "https://tinyurl.com/38kydnjw",
            category_id: "1",
            category_name: "notebook",
            brand_id: "1",
            brand_name: "Chroma Lumix"
        },
        {
            id: "3",
            name: "Moon & Smith Floral Notebook",
            description: "A simple notebook made with the same bookbinding technique as a paperback novel. It also features a red thread bookmark to keep your place.",
            price: "24.99",
            image: "https://tinyurl.com/38kydnjw",
            category_id: "1",
            category_name: "notebook",
            brand_id: "1",
            brand_name: "Chroma Lumix"
        },
        {
            id: "4",
            name: "Moon & Smith Floral Notebook",
            description: "A simple notebook made with the same bookbinding technique as a paperback novel. It also features a red thread bookmark to keep your place.",
            price: "24.99",
            image: "https://tinyurl.com/38kydnjw",
            category_id: "1",
            category_name: "notebook",
            brand_id: "1",
            brand_name: "Chroma Lumix"
        },
        {
            id: "5",
            name: "Moon & Smith Floral Notebook",
            description: "A simple notebook made with the same bookbinding technique as a paperback novel. It also features a red thread bookmark to keep your place.",
            price: "24.99",
            image: "https://tinyurl.com/38kydnjw",
            category_id: "1",
            category_name: "notebook",
            brand_id: "1",
            brand_name: "Chroma Lumix"
        },
        {
            id: "6",
            name: "Moon & Smith Floral Notebook",
            description: "A simple notebook made with the same bookbinding technique as a paperback novel. It also features a red thread bookmark to keep your place.",
            price: "24.99",
            image: "https://tinyurl.com/38kydnjw",
            category_id: "1",
            category_name: "notebook",
            brand_id: "1",
            brand_name: "Chroma Lumix"
        },
    ]
};