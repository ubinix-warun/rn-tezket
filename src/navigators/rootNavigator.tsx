import * as React from 'react';

import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  List,
  Switch,
  Text,
  View,
  Button,
  useColorMode,
} from 'native-base';

import Mcicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Schedule, Tickets, Profile } from '../screens';

const Tab = createBottomTabNavigator();

// const tabDefault = "Home"
const tabDefault = "Schedule"
// const tabDefault = "Tickets"
// const tabDefault = "Profile"
const tabscreens = [
  // {
  //   name: "Home",
  //   component: Home
  // },
  {
    name: "Schedule",
    component: Schedule
  },
  {
    name: "Tickets",
    component: Tickets
  },
  {
    name: "Profile",
    component: Profile
  },
];

  
export function RootTab() {

  const { colorMode, toggleColorMode } = useColorMode();

	return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Schedule') {
                iconName = focused 
                ? 'calendar'
                : 'calendar-outline';
              } else if (route.name === 'Tickets') {
                iconName = focused 
                ? 'ticket'
                : 'ticket-outline';
              } else if (route.name === 'Profile') {
                iconName = focused 
                ? 'account'
                : 'account-outline';
              }
  
              const colorTheme = colorMode === 'dark' ? 'white' : 'black';

              // You can return any component that you like here!
              return <Icon as={Mcicons} name={iconName} size={30} color={colorTheme}  />;
            },
            headerShown: false,
            tabBarShowLabel: false,
        })}
        initialRouteName={tabDefault}>
       
        {tabscreens.map((screen) => (
           <Tab.Screen name={screen.name} component={screen.component}/>
        ))}
  
      </Tab.Navigator>
    );
}