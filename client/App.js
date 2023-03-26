// Import the SafeAreaProvider
import { SafeAreaProvider } from "react-native-safe-area-context";

// Import Icons
import Icon from 'react-native-vector-icons/Ionicons';

// React native navigation components 
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Screens 
import HomeScreen from './screens/HomeScreen';
import SearchNav from './screens/SearchNavigator';
import AccountScreen from './screens/AccountScreen';

// Instantiate the Bottom Tab component 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
};

