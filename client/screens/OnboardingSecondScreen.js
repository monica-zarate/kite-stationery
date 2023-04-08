import { StyleSheet, View} from 'react-native';
import { Text, Button, Image } from '@rneui/themed';

import { themePalette } from "../themes/kiteTheme";

export default function OnboardingSecondScreen( { navigation, setShowOnboarding }) {

    return (
        <View style={styles.container}>
            <Image 
                source={require("../assets/onboard-deals.png")}
                style={styles.onboardImg}
            />
            <Text h1>Exclusive Deals</Text>
            <Text style={{fontSize: 21, color: "#757575", textAlign: "center", marginBottom: 80}}>By using our app, you will receive exclusive prices, offers, and special items only available on the app.</Text>
            <Image 
                source={require("../assets/pi-deals.png")}
                style={styles.activeScreen}
            />
            <View style={styles.btnContainer}>
                <Button 
                    title={'Skip'}
                    onPress={() => setShowOnboarding(false)}
                    titleStyle={{ fontFamily: 'Inter_700Bold', fontSize: 16, textTransform: "uppercase", color: "#000000"}}
                    containerStyle={{
                        width: "49%",
                        borderRadius: 6,
                    }}
                    buttonStyle={{
                        backgroundColor: themePalette.grey,
                        paddingVertical: 15
                    }}
                />
                <Button 
                    title={'Next'}
                    onPress={() => navigation.navigate('OnboardingThird')}
                    titleStyle={{ fontFamily: 'Inter_700Bold', fontSize: 16, textTransform: "uppercase" }}
                    containerStyle={{
                        width: "49%",
                        borderRadius: 6,
                    }}
                    buttonStyle={{
                        backgroundColor: themePalette.primary,
                        paddingVertical: 15
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingHorizontal: 24,
        textAlign: "center",
        alignItems: "center",
    },
    onboardImg: {
        width: 290,
        height: 238,
        resizeMode: "contain",
        marginBottom: 48
    },
    activeScreen: {
        width: 54,
        height: 8, 
        marginBottom: 37
    },
    btnContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        gap: 7
    },
});