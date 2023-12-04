import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageScreen from './components/MessageScreen';
import ChatScreen from './components/ChatScreen';
import WalletScreen from './components/WalletScreen';
import ContactScreen from './components/ContactScreen';
import ProfileScreen from './components/ProfileScreen';
import AuthScreen from './components/AuthScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Message') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'AI Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="AI Chat" component={ChatScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN">
        <Stack.Screen name="LOGIN" component={AuthScreen} />
        <Stack.Screen name="FMW" component={AppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}