import { ScrollView, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, Image } from '@rneui/themed';

export default function AccountScreen({}) {
    return (
        <ScrollView style={styles.container}>
            <Text h1 style={{marginTop: 80, marginBottom: 40}}>Account Screen</Text>
            <View style={{ width: '100%', gap: 6, flexDirection: "row", alignItems:"center", gap: 17, marginBottom: 24}}>
                <Image 
                    source={require("../assets/profile-pic.png")}
                    style={styles.profile_pic}
                />
                <View>
                    <Text h2>Diana Rollins</Text>
                    <Text>drollins@kite.com</Text>
                </View>
            </View>
            <View style={styles.list_container}>
                <View style={[styles.list_item, styles.bottom_border]}>
                    <Text>Saved Items</Text>
                    <Icon 
                        name="chevron-forward-outline"
                        style={styles.chevron}
                    />
                </View>
                <View style={styles.list_item}>
                    <Text>Previous Purchases</Text>
                    <Icon 
                        name="chevron-forward-outline"
                        style={styles.chevron}
                    />
                </View>
            </View>
            <Text h3 style={{ marginBottom: 18}}>Account</Text>
            <View style={styles.list_container}>
                <View style={[styles.list_item, styles.bottom_border]}>
                    <Text>Notifications</Text>
                    <View style={{gap: 6, flexDirection: "row", alignItems: "center"}}>
                        <Text>On</Text>
                        <Icon 
                            name="chevron-forward-outline"
                            style={styles.chevron}
                        />
                    </View>
                </View>
                <View style={[styles.list_item, styles.bottom_border]}>
                    <Text>Language</Text>
                    <View style={{gap: 6, flexDirection: "row", alignItems: "center"}}>
                        <Text>English</Text>
                        <Icon 
                            name="chevron-forward-outline"
                            style={styles.chevron}
                        />
                    </View>
                </View>
                <View style={[styles.list_item, styles.bottom_border]}>
                    <Text>Password Reset</Text>
                    <Icon 
                        name="chevron-forward-outline"
                        style={styles.chevron}
                    />
                </View>
                <View style={styles.list_item}>
                    <Text>Email Update</Text>
                    <Icon 
                        name="chevron-forward-outline"
                        style={styles.chevron}
                    />
                </View>
            </View>
            <Text h3 style={{ marginBottom: 18}}>Company</Text>
            <View style={styles.list_container}>
                <View style={[styles.list_item, styles.bottom_border]}>
                    <Text>Privacy Policy</Text>
                    <Icon 
                        name="chevron-forward-outline"
                        style={styles.chevron}
                    />
                </View>
                <View style={styles.list_item}>
                    <Text>Terms of Use</Text>
                    <Icon 
                        name="chevron-forward-outline"
                        style={styles.chevron}
                    />
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        paddingHorizontal: 24
    },
    profile_pic: {
        width: 60,
        height: 60
    },
    list_item: {
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
       
    },
    chevron: {
        fontSize: 26
    },
    list_container: {
        borderRadius: 4,
        backgroundColor: "#F9F9F9",
        marginBottom: 24
    },
    bottom_border: {
        borderBottomColor: "#E9E9E9",
        borderBottomWidth: 1,
    }
});