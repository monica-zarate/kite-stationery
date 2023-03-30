import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

import Header from '../components/Header';

export default function ResultsScreen({}) {
    return (
        <View style={styles.container}>
            <Header />   
            <Text>Results Screen</Text>
            <Text>This screen will hold the results of the search or filtering</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
});