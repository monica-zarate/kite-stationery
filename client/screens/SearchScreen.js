import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

export default function SearchScreen({}) {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
            <Text>This screen will have the search bar, product categories and brands list</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
});