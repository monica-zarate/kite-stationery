import { useState } from 'react';

// Import the SafeAreaProvider
import { SafeAreaProvider } from "react-native-safe-area-context";

// Import Icons and React native components
import { View, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

// React native navigation components 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Custom Theme 
import { ThemeProvider } from '@rneui/themed';
import { kiteTheme } from "./themes/kiteTheme";

// Import Fonts 
import { useFonts } from 'expo-font';
import{ Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

// Import Onboarding Screens
import OnboardingFirstScreen from './screens/OnboardingFirstScreen';
import OnboardingSecondScreen from './screens/OnboardingSecondScreen';
import OnboardingThirdScreen from './screens/OnboardingThirdScreen';

// Import Screens 
import HomeScreen from './screens/HomeScreen';
import SearchNav from './screens/SearchNavigator';
import AccountScreen from './screens/AccountScreen';

// Instantiate the Bottom Tab component
const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator();

export default function App() {

    const [showOnboarding, setShowOnboarding] = useState(true);

    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
    });

    if (!fontsLoaded) {
        return (
            <View>
                <ActivityIndicator 
                    color='#FF5A00'
                />
            </View>
        )
    }

    if (showOnboarding) {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{ headerShown: false}}
                    >
                        <Stack.Screen 
                            name="OnboardingFirst"
                        >
                            {props => <OnboardingFirstScreen {...props} setShowOnboarding={setShowOnboarding} /> }
                        </Stack.Screen>
                        <Stack.Screen
                            name="OnboardingSecond"
                        >
                            {props => <OnboardingSecondScreen {...props} setShowOnboarding={setShowOnboarding} /> }
                        </Stack.Screen>
                        <Stack.Screen
                            name="OnboardingThird"
                        >
                            {props => <OnboardingThirdScreen {...props} setShowOnboarding={setShowOnboarding} />}
                        </Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }

    return (
        <SafeAreaProvider>
            <ThemeProvider theme={kiteTheme}>
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName='Home'
                        screenOptions={{
                            tabBarActiveTintColor: '#222222',
                            tabBarInactiveTintColor: '#939393',
                            headerShown: false
                        }}
                    >
                        <Tab.Screen 
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarLabel: 'Home',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon
                                        name="home" 
                                        color={color} 
                                        size={size} 
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen 
                            name="Search"
                            component={SearchNav}
                            options={{
                                tabBarLabel: 'Search',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon
                                        name="search" 
                                        color={color} 
                                        size={size} 
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen 
                            name="Account"
                            component={AccountScreen}
                            options={{
                                tabBarLabel: 'Account',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon
                                        name="person" 
                                        color={color} 
                                        size={size} 
                                    />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
};

