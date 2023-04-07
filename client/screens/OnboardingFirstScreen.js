import { StyleSheet, View } from 'react-native';
import { Text, Button, Image } from '@rneui/themed';

import { themePalette } from "../themes/kiteTheme";

export default function OnboardingFirstScreen({ navigation, setShowOnboarding}) {

    return (
        <View style={styles.container}>
            <Image 
                source={require("../assets/onboard-welcome.png")}
                style={styles.onboardImg}
            />
            <Text h1>Welcome!</Text>
            <Text style={{fontSize: 21, color: "#757575", textAlign: "center", marginBottom: 80}}>Shop, favourite and review the largest stationery selection right in the palm of your hand.</Text>
            <Image 
                source={require("../assets/pi-welcome.png")}
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
                    onPress={() => navigation.navigate('OnboardingSecond')}
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
    btn: {
        textTransform: "uppercase"
    }

});