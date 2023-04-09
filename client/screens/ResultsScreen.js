import { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, FlatList, ActivityIndicator  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, Image } from '@rneui/themed';

import Header from '../components/Header';
// This page will make an API call to retrieve the filtered results based on the brand_id, category_id

export default function ResultsScreen({ route, navigation }) {

    const { brand_id, category_id } = route.params;

    // This fetch will be getting the query results
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        const uri = "http://kite-stationery.monicasites.com/api/v1/products/read.php";

        let filter = "";

        if (brand_id) {
            filter = "?brand_id=" + brand_id;
        };

        if (category_id) {
            filter = "?category_id=" + category_id;
        };

        fetch(uri + filter)
            .then(res => res.json())
            .then(
                (result) => {
                    setDataResult(result);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    return (
        <View style={styles.container}>
            <Header />
            <Pressable
                title={'Go Back'}
                onPress={() => navigation.goBack()}
                style={styles.backBtn}
            >
                <Icon name="arrow-back-outline" style={styles.back}  />
            </Pressable>
            {displayDataContainer(error, isLoaded, dataResult, navigation, brand_id, category_id)}
        </View>
    )
};

function displayDataContainer (error, isLoaded, dataResult, navigation, brand_id, category_id) {
    
    let resultsTitle;
    
    const renderItem = ({item}) => (
        <Pressable 
            style={styles.product_card}
            onPress={() => navigation.navigate('Product Detail', {
                product: item
            })}
        >
            <Image 
                source={{uri: item.image}}
                style={styles.product_img}
            />
            <Text h4 style={styles.product_name}>{item.name}</Text>
            <Text>${item.price}</Text>
        </Pressable>
    );

    if (error) {
        // Show error message 
        return (
            <View>
                <Text>Error: {error.message}</Text>
            </View>
        );
    };

    if (!isLoaded) {
        // Show activity indicator while the request is loading
        return (
            <View>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" color="#d55140"/>
            </View>
        );
    };

    if (dataResult.count === 0) {
        // If there are no records, then this screen will show
        return (
            <View>
                <Text>No records found for search </Text>
            </View>
        );
    };

    if (brand_id) {
        console.log("dataresult.products", dataResult.products);
        resultsTitle = dataResult.products[0].brand_name;
    }

    if (category_id) {
        resultsTitle = dataResult.products[0].category_name;
    }

    // Returned flatlist will display the retrieved data
    return (
        <FlatList 
            ListHeaderComponent={
                <>
                    <Text h1 style={{marginVertical: 24, textTransform: "capitalize"}}>{resultsTitle ? resultsTitle : "Results"}</Text>
                </>
            }
            data={dataResult.products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', }}
        />
    );  
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        paddingHorizontal: 24,
    },
    backBtn: {
        width: 42
    },
    back: {
        fontSize: 40
    },
    product_card: {
        width: "45%",
        marginBottom: 30,
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
