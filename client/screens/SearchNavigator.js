import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './SearchScreen';
import ResultsScreen from './ResultsScreen';
import ProductDetailScreen from './ProductDetailScreen';

const Stack = createNativeStackNavigator();

export default function SearchNav({}) {
    return (
        <Stack.Navigator
            initialRouteName='Search Screen'
        >
            <Stack.Screen
                name="Search Screen"
                component={SearchScreen}     
            />
            <Stack.Screen
                name="Results"
                component={ResultsScreen}
            />
            <Stack.Screen
                name="Product Detail"
                component={ProductDetailScreen}
            />
         </Stack.Navigator>
    );
};
