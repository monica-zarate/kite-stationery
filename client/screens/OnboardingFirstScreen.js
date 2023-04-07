import { StyleSheet, View } from 'react-native';
import { Text, Button, } from '@rneui/themed';

export default function OnboardingFirstScreen({ navigation, setShowOnboarding}) {

    return (
        <View style={styles.container}>
            <Text h1>Welcome!</Text>
            <Text>Shop, favourite and review the largest stationery selection right in the palm of your hand.</Text>

            <View style={styles.btnContainer}>
                <Button 
                    title={'Skip'}
                    onPress={() => setShowOnboarding(false)}
                />
                <Button 
                    title={'Next'}
                    onPress={() => navigation.navigate('OnboardingSecond')}
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
    btnContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "salmon"
    }

});