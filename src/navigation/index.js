import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './auth';
import AppNavigation from './app';
import { routes } from '../services';
import { navigationRef } from './rootNavigation';

const NavigationStack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer
            ref={navigationRef}>
            <NavigationStack.Navigator
                screenOptions={{ headerShown: false }}  // Hidding Header of App
                initialRouteName={routes.app}  // Default route to render on first load of the navigator
            >
                <NavigationStack.Screen name={routes.auth} component={AuthNavigation} />
                <NavigationStack.Screen name={routes.app} component={AppNavigation} />
            </NavigationStack.Navigator>
        </NavigationContainer>
    )
}