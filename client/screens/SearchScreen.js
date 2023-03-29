import { View, StyleSheet, SectionList, Pressable } from 'react-native';
import { Text, SearchBar, Image } from '@rneui/themed';

import BrandFetch from '../components/BrandFetch';

export default function SearchScreen({}) {
    const renderItem = ({item, index}) => (
        <Pressable 
            style={styles.category}
            onPress={() => navigation.navigate('Results', {
                filter: item.name
            })}
        >
            <Image 
                source={item.imagePath}
            />
            <Text>{item.name}</Text>
        </Pressable>
    );

    const renderHeader = ({section}) => (
        <Text h2>{section.title}</Text>
    );

    return (
        <View style={styles.container}>
            <Text h1>What are you looking for?</Text>
            <SearchBar 
                lightTheme={true}
                containerStyle={{
                    backgroundColor: '#fff',
                    borderBottomColor: 'transparent',
                    borderTopColor: 'transparent'
                }}
                inputContainerStyle={{
                    backgroundColor: '#fff',
                    // color: '#939393'
                    color: 'salmon'
                }}
                placeholder={"Search by Product, Name or Keyword"}
            />
            <BrandFetch />
            {/* <SectionList 
                sections={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                renderSectionHeader={renderHeader}
            /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        // backgroundColor: '#fff',
        marginHorizontal: 24,
        marginTop: 15
    },
});

const DATA = [
    {
        title: "Product Categories",
        data: [
            {
                "name": "notebook",
                "imagePath": ""
            },
            {
                "name": "pen",
                "imagePath": ""
            },
            {
                "name": "stickers",
                "imagePath": ""
            },
            {
                "name": "ink",
                "imagePath": ""
            },
            {
                "name": "tape",
                "imagePath": ""
            },
            {
                "name": "highlighter",
                "imagePath": ""
            },

        ]
    },
    {
        title: "Brands",
        data: [
            {
                "name": "chroma lumix",
                "imagePath": ""
            },
            {
                "name": "luctus",
                "imagePath": ""
            },
            {
                "name": "moon smith",
                "imagePath": ""
            },
            {
                "name": "reed & quill",
                "imagePath": ""
            },
            {
                "name": "outline point",
                "imagePath": ""
            },
            {
                "name": "conner's",
                "imagePath": ""
            },
        ]
    }
];