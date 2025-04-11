// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import './amplify-config';

import DailyGoals from './screens/DailyGoals';
import Statistics from './screens/Statistics';
import AuthGate from './components/AuthGate';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <AuthGate> */}
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName: keyof typeof Ionicons.glyphMap = route.name === 'Daily Goals' ? 'checkmark-circle' : 'bar-chart';
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#58cc02',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
            })}
          >
            <Tab.Screen name="Daily Goals" component={DailyGoals} />
            <Tab.Screen name="Statistics" component={Statistics} />
          </Tab.Navigator>
        </NavigationContainer>
      {/* </AuthGate> */}
    </SafeAreaProvider>
  );
}
