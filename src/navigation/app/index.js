import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EditProfile, Home, Menu, PrivacyPolicy, SelectPriceAndPaymentMethod, ShareFeedback, TermsOfService, VehicleInfo } from '../../screens/app';
import { routes } from '../../services';
import { colors, appStyles, appIcons } from '../../services/utilities';
import { Icon, Image } from '@rneui/base';
import { totalSize } from 'react-native-dimension';
import { useEffect, useState } from 'react';
import { navigationRef } from '../rootNavigation';
import { Icons } from '../../components';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

function HomeNavigation() {
    return (
        <HomeStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            {/* Home is the Main Screen */}
            <HomeStack.Screen name={routes.home} component={Home} />
            {/* Vehincle Info is another Screen */}
            <HomeStack.Screen name={routes.vehicleInfo} component={VehicleInfo} />
            {/* SelectPriceAndPaymentMethod Info is another Screen */}
            <HomeStack.Screen name={routes.selectPriceAndPaymentMethod} component={SelectPriceAndPaymentMethod} />
        </HomeStack.Navigator>
    );
}

// Defines a Bottom Tab Navigator with Two Tabs
function MyTabs() {
    const [tab, setTab] = useState(routes.home)
    useEffect(() => {
        const unsubscribe = navigationRef?.current?.addListener('state', () => {
            const currentRoute = navigationRef?.current?.getCurrentRoute()
            if (currentRoute) {
                // console.log('currentRoute: ', currentRoute)
                setTab(currentRoute?.name)
            }
        });
        return unsubscribe
    })

    const isEditProfileTab = tab === routes.editProfile
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: [
                    isEditProfileTab
                        ?
                        {
                            position: 'absolute',
                            right: 0,
                            left: 0,
                            bottom: 0,
                            backgroundColor: colors.appBackgrounColor7 + '80',
                            borderTopWidth: 0
                        }
                        :
                        { backgroundColor: colors.appBackgrounColor1, borderTopWidth: 0, ...appStyles.shadowDark }
                ],
                tabBarLabelStyle: [
                    isEditProfileTab
                        ?
                        [appStyles.textSmall, appStyles.textPrimaryColor]
                        :
                        appStyles.textSmall
                ],
            })}
        >
            {/* Home Tab */}
            <Tab.Screen
                name={routes.homeTab}
                component={HomeNavigation}
                options={({ route }) => ({
                    tabBarLabel: 'Home',
                    tabBarIcon: () => {
                        return (
                            <Icon
                                name='home'
                                type='feather'
                                size={totalSize(2.5)}
                                color={isEditProfileTab ? colors.appColor1 : colors.appTextColor1}
                            />
                        )
                    }
                })}
            />
            {/* Account Tab */}
            <Tab.Screen name={routes.editProfile} component={EditProfile}
                options={({ route }) => ({
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icons.Custom
                                source={appIcons.user}
                                size={totalSize(2.5)}
                                color={focused ? colors.appColor1 : colors.appTextColor1}
                            />
                        )
                    }
                })}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        navigation.navigate(routes.menu)
                    }
                })}
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
            {/* Menu is another Screen */}
            <AppStack.Screen name={routes.menu} component={Menu} options={{ presentation: 'transparentModal' }} />
            {/* ShareFeedback is another Screen */}
            <AppStack.Screen name={routes.shareFeedback} component={ShareFeedback} />
            {/* TermsOfService is another Screen */}
            <AppStack.Screen name={routes.termsOfService} component={TermsOfService} />
            {/* PrivacyPolicy is another Screen */}
            <AppStack.Screen name={routes.privacyPolicy} component={PrivacyPolicy} />
        </AppStack.Navigator>
    );
}