import { StyleSheet, Pressable, FlatList, View } from 'react-native';
import { Text, Image } from '@rneui/themed';

export default function ProductCategoriesFetch({navigation}) {

    const renderItem = ({item}) => (
        <Pressable 
            style={styles.category}
            onPress={() => navigation.navigate('Results', {
                category_id: item.category_id,
            })}
        >
            <Image 
                source={item.category_icon}
                style={styles.category_icon}
            />
            <Text style={styles.category_name}>{item.category_name}</Text>
        </Pressable>
    );

    return (
        <FlatList 
            data={DATA.categories}
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

const DATA = 
    {
        count: 6,
        categories: [
            {
                category_id: "1",
                category_name: "notebook",
                category_icon: require('../assets/test-icon.png')
            },
            {
                category_id: "2",
                category_name: "Pen",
                category_icon: require('../assets/test-icon.png')
            },
            {
                category_id: "3",
                category_name: "stickers",
                category_icon: require('../assets/test-icon.png')
            },
            {
                category_id: "4",
                category_name: "ink",
                category_icon: require('../assets/test-icon.png')
            },
            {
                category_id: "5",
                category_name: "tape",
                category_icon: require('../assets/test-icon.png')
            },
            {
                category_id: "6",
                category_name: "highlighter",
                category_icon: require('../assets/test-icon.png')
            }
        ]
    }
;