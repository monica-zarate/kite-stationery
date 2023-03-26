import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

export default function HomeScreen({}) {
    return (
        <View style={styles.container}>
            <Text h1>Hello Diana!</Text>
            <View>
                <Text h2>Deal of the Week</Text>

            </View>
            <View>
                <Text h2>Promotions</Text>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
});