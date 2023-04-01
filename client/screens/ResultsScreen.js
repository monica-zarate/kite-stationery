import { View, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text,  } from '@rneui/themed';

import Header from '../components/Header';
// This page will make an API call to retrieve the filtered results based on the brand_id, category_id

export default function ResultsScreen({ route, navigation }) {

    const { brand_id, category_id } = route.params;

    return (
        <View style={styles.container}>
            <Header />   
            <Text>Results Screen</Text>
            <Pressable
                title={'Go Back'}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-back-outline" style={styles.back}  />
            </Pressable>
            <Text>This screen will hold the results of the search or filtering</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    back: {
        fontSize: 24
    }
});