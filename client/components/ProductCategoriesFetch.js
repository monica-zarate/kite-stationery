import { useState, useEffect } from 'react';
import { StyleSheet, Pressable, FlatList, View, ActivityIndicator } from 'react-native';
import { Text, Image } from '@rneui/themed';

export default function ProductCategoriesFetch({navigation}) {
    // This fetch will be getting the categories
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        const uri = 'http://kite-stationery.monicasites.com/api/v1/categories/read.php'; 

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
        <>
            {displayDataContainer(error, isLoaded, dataResult, navigation)}
        </>
    );
};

function displayDataContainer (error, isLoaded, dataResult, navigation) {
    
    const renderItem = ({ item }) => (
        <Pressable 
            style={styles.category}
            onPress={() => navigation.navigate('Results', {
                category_id: item.category_id,
            })}
        >
            <Image 
                source={{uri: item.category_icon}}
                style={styles.category_icon}
                resizeMode="contain"
            />
            <Text style={styles.category_name}>{item.category_name}</Text>
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
            data={dataResult.categories}
            renderItem={renderItem}
            keyExtractor={item => item.category_id}
            numColumns={3}
            style={{ width: '100%', marginBottom: 24}}
            columnWrapperStyle={{ justifyContent: 'space-between', gap: 7 }}
        />
    );
    
};

const styles = StyleSheet.create({
    category: {
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 4,
        alignItems: "center",
        width: "32%",
        marginBottom: 7,
        aspectRatio: 1
    },
    category_icon: {
        height: 40,
        width: 40,
        marginBottom: 10
    },
    category_name: {
        textAlignVertical: "center",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: 'Inter_600SemiBold',
        fontSize: 11
    }
});

