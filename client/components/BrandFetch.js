import { StyleSheet, Pressable, FlatList, View } from 'react-native';
import { Text, Image } from '@rneui/themed';

export default function BrandFetch({navigation}) {

    const renderItem = ({item}) => (
        <Pressable 
            style={styles.brand}
            // onPress={() => navigation.navigate('Results', {
            //     brand_id: item.brand_id,
            // })}
        >
            <Text>{item.brand_name}</Text>
        </Pressable>
    );

    return (
        <FlatList 
            data={DATA.brands}
            renderItem={renderItem}
            keyExtractor={item => item.brand_id}
        />
    );
};

const styles = StyleSheet.create({

});

const DATA = 
    {
        count: 6,
        brands: [
            {
                brand_id: "1",
                brand_name: "Chroma Lumix",
                brand_icon: "a"
            },
            {
                brand_id: "2",
                brand_name: "Luctus",
                brand_icon: "a"
            },
            {
                brand_id: "3",
                brand_name: "Moon Smith",
                brand_icon: "a"
            },
            {
                brand_id: "4",
                brand_name: "Reed & Quil",
                brand_icon: "a"
            },
            {
                brand_id: "5",
                brand_name: "Outline Point",
                brand_icon: "a"
            },
            {
                brand_id: "6",
                brand_name: "Conner's",
                brand_icon: "a"
            }
        ]
    }
;