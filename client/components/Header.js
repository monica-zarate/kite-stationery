import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from '@rneui/themed';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text>Kite Stationery</Text>
            <Icon 
                name="cart"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
    },
});