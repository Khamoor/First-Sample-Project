import React from 'react'
import { Text, View } from 'react-native'
import Login from './src/screens/auth/login'
import Navigation from './src/navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>App.js</Text>
    // </View>
    // <Login/>
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}