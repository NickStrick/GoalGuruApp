// src/contexts/NotificationContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NotificationContextType = {
  notificationsEnabled: boolean;
  toggleNotifications: () => void;
};

const NotificationContext = createContext<NotificationContextType>({
  notificationsEnabled: true,
  toggleNotifications: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const NotificationProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    const loadPreference = async () => {
      const storedPreference = await AsyncStorage.getItem('notifications');
      if (storedPreference !== null) {
        setNotificationsEnabled(storedPreference === 'enabled');
      }
    };
    loadPreference();
  }, []);

  const toggleNotifications = async () => {
    const newPreference = !notificationsEnabled;
    setNotificationsEnabled(newPreference);
    await AsyncStorage.setItem('notifications', newPreference ? 'enabled' : 'disabled');
  };

  return (
    <NotificationContext.Provider value={{ notificationsEnabled, toggleNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);
