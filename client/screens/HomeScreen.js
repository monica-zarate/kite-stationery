import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

import Header from '../components/Header';

export default function HomeScreen({}) {
    return (
        <View style={styles.container}>
            <Header />    
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
        paddingHorizontal: 24
    },
});