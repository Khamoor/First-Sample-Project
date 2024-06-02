import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EditProfile, Home, Menu, VehicleInfo } from '../../screens/app';
import { routes } from '../../services';
import { colors, appStyles, appIcons } from '../../services/utilities';
import { Icon, Image } from '@rneui/base';
import { totalSize } from 'react-native-dimension';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

function HomeNavigation() {
    return (
        <HomeStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            {/* MyTabs is the Main Screen */}
            <HomeStack.Screen name={routes.home} component={Home} />
            {/* Menu is Snother Screen */}
            <HomeStack.Screen name={routes.vehicleInfo} component={VehicleInfo} />
        </HomeStack.Navigator>
    );
}

// Defines a Bottom Tab Navigator with Two Tabs
function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.appBackgrounColor1, borderTopWidth: 0, ...appStyles.shadowDark },
                tabBarLabelStyle: [appStyles.textSmall],
            }}
        >
            {/* Home Tab */}
            <Tab.Screen
                name={routes.homeTab}
                component={HomeNavigation}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => {
                        return (
                            <Icon
                                name='home'
                                type='feather'
                                size={totalSize(2.5)}
                            />
                        )
                    }
                }}
            />
            {/* Account Tab */}
            <Tab.Screen name={routes.editProfile} component={EditProfile}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={appIcons.user}
                                style={{ height: totalSize(2.5), width: totalSize(2.5) }}
                                resizeMode='contain'
                            />
                            // <Icon
                            //     name='home'
                            //     type='feather'
                            //     size={totalSize(2.5)}
                            // />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
}

// Define Stack Navigator
export default function AppNavigation() {
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            {/* MyTabs is the Main Screen */}
            <AppStack.Screen name={routes.bottomTab} component={MyTabs} />
            {/* Menu is Snother Screen */}
            <AppStack.Screen name={routes.menu} component={Menu} />
        </AppStack.Navigator>
    );
}