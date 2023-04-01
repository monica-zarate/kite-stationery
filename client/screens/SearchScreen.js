import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import { Text, SearchBar, Image } from '@rneui/themed';

import Header from '../components/Header';
import BrandFetch from '../components/BrandFetch';
import ProductCategoriesFetch from '../components/ProductCategoriesFetch';

export default function SearchScreen({ navigation }) {

    return (
        <View style={styles.container}>
            {/* <FlatList /> */}
            <Header />    
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
            <BrandFetch 
                navigation={navigation}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginHorizontal: 24,
        marginTop: 15
    },
});
