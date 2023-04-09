import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Image } from '@rneui/themed';

import Header from '../components/Header';

import { themePalette } from "../themes/kiteTheme";

export default function HomeScreen({}) {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={{paddingHorizontal: 24}}>
                <Text h1 style={{marginVertical: 40}}>Hello <Text h1 style={{color: themePalette.primary}}>Diana!</Text>
                </Text>
                <View style={{marginBottom: 40}}>
                    <Text h2 style={{marginBottom: 24}}>Deals of the Week</Text>
                    <View style={{ width: '100%', gap: 6, flexDirection: "row", justifyContent: "space-between"}}>
                        <Image 
                            source={require("../assets/home-dow-1.png")}
                            style={styles.deal_img}
                        />
                        <Image 
                            source={require("../assets/home-dow-2.png")}
                            style={styles.deal_img}
                        />
                    </View>
                </View>
                <View>
                    <Text h2>Promotions</Text>
                    <Image 
                        source={require("../assets/home-promo-refer.png")}
                        style={styles.promo_img}
                    />
                    <Image 
                        source={require("../assets/home-promo-share.png")}
                        style={styles.promo_img}
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
        // paddingHorizontal: 24
    },
    deal_img: {
        width: 180, 
        height: 275,
        resizeMode: 'contain'
    },
    promo_img: {
        width: 360,
        height: 180,
        resizeMode: 'contain'
    }
});