
import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    border: 'gray',
    primary: '#58cc02',
    notification: '#FF453A',
  },
};

export const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#121212',
    card: '#1E1E1E',
    text: '#FFFFFF',
    border: 'gray',
    primary: '#58cc02',
    notification: '#FF453A',
  },
};