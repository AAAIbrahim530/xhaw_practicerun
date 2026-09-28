import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import About from './About';
import Fees from './Fees';
import Contact from './Contact';
import { COLORS } from './Styles';

const Tab = createBottomTabNavigator();

export default function Overview() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.bgBackground,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.accentPurple,
          },
          headerTitleStyle: {
            color: COLORS.textMain,
            fontWeight: 'bold',
            fontSize: 16,
            letterSpacing: 1,
          },
          headerTitleAlign: 'center',
          tabBarStyle: {
            backgroundColor: COLORS.bgBackground,
            borderTopWidth: 1,
            borderTopColor: COLORS.accentBlue,
            paddingBottom: 6,
            height: 60,
          },
          tabBarActiveTintColor: COLORS.accentBlue,
          tabBarInactiveTintColor: COLORS.textSecondary,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'HOME' }} />
        <Tab.Screen name="About" component={About} options={{ title: 'ABOUT US' }} />
        <Tab.Screen name="Fees" component={Fees} options={{ title: 'PACKAGES' }} />
        <Tab.Screen name="Contact" component={Contact} options={{ title: 'CONTACT' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

