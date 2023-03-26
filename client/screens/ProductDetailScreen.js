import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

export default function ProductDetailScreen({}) {
    return (
        <View style={styles.container}>
            <Text>Product Detail Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
});