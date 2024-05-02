import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateAccount, Login, SetUpProfile } from '../../screens/auth';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}  // Hidding Header of Login
        >
            <AuthStack.Screen name='login' component={Login} />
            <AuthStack.Screen name='createAccount' component={CreateAccount} />
            <AuthStack.Screen name='setUpProfile' component={SetUpProfile} />
        </AuthStack.Navigator>
    );
}