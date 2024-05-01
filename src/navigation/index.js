import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './auth';

const NavigationStack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <NavigationStack.Navigator
                screenOptions={{ headerShown: false }}  // Hidding Header of App
            >
                <NavigationStack.Screen name='app' component={AuthNavigation} />
            </NavigationStack.Navigator>
        </NavigationContainer>
    )
}