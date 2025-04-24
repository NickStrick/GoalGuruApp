// DailyGoals.styles.ts

import { StyleSheet } from 'react-native';

export const createDailyGoalsStyles = (theme: {
  background: string;
  text: string;
  subheading: string;
  card: string;
  cardBorder: string;
  cardCompleted: string;
  cardCompletedBorder: string;
  inputBackground: string;
  inputBorder: string;
  placeholder: string;
  primary: string;
  emptyMessage: string;
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: theme.background,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 8,
    },
    subheading: {
      fontSize: 16,
      color: theme.subheading,
      marginBottom: 12,
    },
    goalCard: {
      padding: 16,
      backgroundColor: theme.card,
      borderRadius: 14,
      borderColor: theme.cardBorder,
      borderWidth: 1,
    },
    goalCardCompleted: {
      backgroundColor: theme.cardCompleted,
      borderColor: theme.cardCompletedBorder,
    },
    goalText: {
      fontSize: 16,
      color: theme.text,
    },
    goalTextCompleted: {
      textDecorationLine: 'line-through',
      color: theme.subheading,
    },
    emptyMessage: {
      textAlign: 'center',
      color: theme.emptyMessage,
      fontStyle: 'italic',
      marginTop: 30,
    },
    inputContainer: {
      flexDirection: 'row',
      marginTop: 16,
      alignItems: 'center',
      gap: 8,
    },
    input: {
      flex: 1,
      backgroundColor: theme.inputBackground,
      padding: 12,
      borderRadius: 14,
      borderColor: theme.inputBorder,
      borderWidth: 1,
      color: theme.text,
    },
    addButton: {
      backgroundColor: theme.primary,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 14,
    },
    addButtonText: {
      color: '#FFFFFF',
      fontWeight: '600',
    },
  });
