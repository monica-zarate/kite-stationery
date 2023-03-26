import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

export default function AccountScreen({}) {
    return (
        <View style={styles.container}>
            <Text>Account Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
});