import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, Image } from '@rneui/themed';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.company_mark}>
                <Image 
                source={require("../assets/kite-stationery-transp-icon.png")}
                style={styles.kite}
                />
                <Text h3>KITE STATIONERY</Text>
            </View>
            <Icon 
                name="cart-outline"
                style={styles.cart}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        justifyContent: "space-between",
        paddingHorizontal: 24
    },
    kite: {
        width: 27,
        height: 27
    },
    company_mark: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    company_name: {
        fontSize: 18,
        fontWeight: 600
    },
    cart: {
        fontSize: 24
    }

});