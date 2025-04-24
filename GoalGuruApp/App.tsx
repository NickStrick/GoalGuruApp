// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { NotificationProvider } from './src/contexts/NotificationContext';

import { useTheme } from './src/contexts/ThemeContext';
import { lightTheme, darkTheme } from './src/themes/navigation';

import './amplify-config';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrophy, faUser, faChartSimple } from '@fortawesome/free-solid-svg-icons';

import DailyGoals from './screens/DailyGoals';
import Statistics from './screens/Statistics';
import Profile from './screens/Profile';
import AuthGate from './components/AuthGate';

const Tab = createBottomTabNavigator();

function AppContent() {

  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
  console.log('theme', isDarkMode)
  return (
          <NavigationContainer theme={theme}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;
                  // faTrophy, faUser, faRankingStar
                  switch (route.name) {
                    case 'Daily Goals':
                      iconName = faTrophy;
                      break;``
                    case 'Statistics':
                      iconName = faChartSimple;
                      break;
                    case 'Profile':
                      iconName = faUser;
                      break;
                    default:
                      iconName = faTrophy;
                  }
                  
                
                  return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.card,
            borderTopColor: theme.colors.border,
            borderTopWidth: 2,
            paddingTop: 5,
          },
              })}
            >
              <Tab.Screen name="Daily Goals" component={DailyGoals} />
              <Tab.Screen name="Statistics" component={Statistics}  />
              <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
          </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NotificationProvider>
          <AppContent />
        </NotificationProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}