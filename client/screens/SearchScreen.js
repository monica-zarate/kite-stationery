import { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Pressable, ActivityIndicator } from 'react-native';
import { Text, SearchBar, Image } from '@rneui/themed';

import Header from '../components/Header';
import BrandFetch from '../components/BrandFetch';
import ProductCategoriesFetch from '../components/ProductCategoriesFetch';

export default function SearchScreen({ navigation }) {

    // This fetch will be getting the brands 
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        const uri = 'http://kite-stationery.monicasites.com/api/v1/brands/read.php'; 

        fetch(uri)
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
            {displayDataContainer(error, isLoaded, dataResult, navigation)}
        </View>
    )
};

function displayDataContainer (error, isLoaded, dataResult, navigation) {
    
    const renderItem = ({ item }) => (
        <Pressable 
            style={styles.brand}
            onPress={() => navigation.navigate('Results', {
                brand_id: item.brand_id,
            })}
        >
            <Image 
                source={{uri: item.brand_icon}}
                containerStyle={styles.brand_icon}
                resizeMode="contain"
            />
            <Text style={styles.brand_name}>{item.brand_name}</Text>
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

    // Returned flatlist will display the retrieved data
    return (
        <FlatList 
            ListHeaderComponent={
                <>
                    <Text h1 style={{marginVertical: 30}}>What item are you looking for?</Text>
                    <SearchBar 
                        lightTheme={true}
                        containerStyle={{
                            backgroundColor: '#fff',
                            borderBottomColor: 'transparent',
                            borderTopColor: 'transparent',
                            marginBottom: 30
                        }}
                        inputContainerStyle={{
                            backgroundColor: '#fff',
                            color: 'salmon'
                        }}
                        placeholder={"Search by Product Name"}
                    />
                    <Text h2 style={{marginBottom: 24}}>Product Categories</Text>
                    <ProductCategoriesFetch 
                        navigation={navigation}
                    />
                    <Text h2 style={{marginBottom: 24}}>Brands</Text>
                </>
            }
            data={dataResult.brands}
            renderItem={renderItem}
            keyExtractor={item => item.brand_id}
            numColumns={3}
            style={{ width: '100%', marginBottom: 24}}
            columnWrapperStyle={{ justifyContent: 'space-between', gap: 7 }}
            navigation={navigation}
        />
    );  
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 24,
        marginTop: 15
    },
    brand: {
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 4,
        alignItems: "center",
        width: "32%",
        marginBottom: 7,
    },
    brand_icon: {
        height: 60,
        width: 60,
        marginBottom: 10
    },
    brand_name: {
        textAlignVertical: "center",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: 'Inter_600SemiBold',
        fontSize: 11
    }
});
