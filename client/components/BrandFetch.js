import { StyleSheet, Pressable, FlatList, View } from 'react-native';
import { Text, Image } from '@rneui/themed';

export default function BrandFetch({navigation}) {

    const renderItem = ({item}) => (
        <Pressable 
            style={styles.brand}
            onPress={() => navigation.navigate('Results', {
                brand_id: item.brand_id,
            })}
        >
            <Image 
                source={item.brand_icon}
                style={styles.brand_icon}
            />
            <Text style={styles.brand_name}>{item.brand_name}</Text>
        </Pressable>
    );

    return (
        <FlatList 
            data={DATA.brands}
            renderItem={renderItem}
            keyExtractor={item => item.brand_id}
            numColumns={3}
            style={{ width: '100%', marginBottom: 24}}
            columnWrapperStyle={{ justifyContent: 'space-between', gap: 7 }}
        />
    );
};

const styles = StyleSheet.create({
    brand: {
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 4,
        alignItems: "center",
        width: "32%",
        marginBottom: 7,
    },
    brand_icon: {
        height: 40,
        width: 40,
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

const DATA = 
    {
        count: 6,
        brands: [
            {
                brand_id: "1",
                brand_name: "Chroma Lumix",
                brand_icon: require('../assets/test-icon.png')
            },
            {
                brand_id: "2",
                brand_name: "Luctus",
                brand_icon: require('../assets/test-icon.png')
            },
            {
                brand_id: "3",
                brand_name: "Moon Smith",
                brand_icon: require('../assets/test-icon.png')
            },
            {
                brand_id: "4",
                brand_name: "Reed & Quil",
                brand_icon: require('../assets/test-icon.png')
            },
            {
                brand_id: "5",
                brand_name: "Outline Point",
                brand_icon: require('../assets/test-icon.png')
            },
            {
                brand_id: "6",
                brand_name: "Conner's",
                brand_icon: require('../assets/test-icon.png')
            }
        ]
    }
;