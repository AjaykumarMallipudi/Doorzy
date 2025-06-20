// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, Entypo } from '@expo/vector-icons';

import Home from './screens/home';
import Booking from './screens/booking';
import Wallet from './screens/wallet';
import Profile from './screens/profile';
import HelpInputScreen from './screens/HelpInputScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <Ionicons name="home" size={size} color={color} />;
          } else if (route.name === 'Booking') {
            return <Ionicons name="calendar" size={size} color={color} />;
          } else if (route.name === 'Wallet') {
            return <Entypo name="wallet" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <Ionicons name="person" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

// App with Stack Navigation (to push HelpInputScreen)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="HelpInput" component={HelpInputScreen} options={{ title: 'Help Input' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
