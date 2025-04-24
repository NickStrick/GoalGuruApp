import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../src/contexts/ThemeContext';
import { useNotifications } from '../src/contexts/NotificationContext';
import { lightTheme, darkTheme } from '../src/themes/theme';
import { createStyles } from './Screens.styles';

export default function Profile() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { notificationsEnabled, toggleNotifications } = useNotifications();
  const theme = isDarkMode ? darkTheme : lightTheme;
  console.log('isdarkmode', isDarkMode);
  const styles = createStyles(theme);

  const [name, setName] = useState('Your Name');

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.label, { color: theme.text }]}>Name</Text>
      <TextInput
        style={[styles.inputName, { color: theme.text, borderColor: theme.primary,backgroundColor: theme.background }]}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
      />

      <View style={styles.row}>
        <Text style={[styles.label, { color: theme.text }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          thumbColor={isDarkMode ? theme.primary : '#f4f3f4'}
          trackColor={{ false: '#767577', true: theme.primaryBacklight }}
        />
      </View>

      {/* <View style={styles.row}>
        <Text style={[styles.label, { color: theme.text }]}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          thumbColor={notificationsEnabled ? theme.primary : '#f4f3f4'}
          trackColor={{ false: '#767577', true: theme.primaryBacklight }}
        />
      </View> */}
    </View>
  );
}
