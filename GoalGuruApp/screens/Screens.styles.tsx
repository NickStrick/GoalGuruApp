// DailyGoals.styles.ts

import { StyleSheet } from 'react-native';

export const createStyles = (theme: {
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
  primaryShadow: string;
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
      // flex: 1
    },
    subheading: {
      fontSize: 16,
      color: theme.subheading,
      marginBottom: 12,
    },
    viewrow:{
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginVertical: 10,
    },
    viewcentered:{
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    goalCard: {
      padding: 16,
      backgroundColor: theme.card,
      borderRadius: 14,
      borderColor: theme.cardBorder,
      borderWidth: 2,
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
      backgroundColor: theme.background,
      padding: 12,
      borderRadius: 14,
      borderColor: theme.primary,
      borderWidth: 2,
      color: theme.text,
    },
    inputName: {
      flex: 0,
      backgroundColor: theme.background,
      padding: 12,
      borderRadius: 14,
      borderColor: theme.primary,
      borderWidth: 2,
      color: theme.text,
    },
    addButton: {
      backgroundColor: theme.primary,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 14,
      borderBottomColor: theme.primaryShadow,
      borderBottomWidth: 4,
      borderRightWidth: 4,

    },
    addButtonText: {
      color: theme.background,
      fontWeight: '600',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 16,
      marginTop: 24,
      color: theme.text,
    },
    streakText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#58cc02',
      // marginBottom: 16,
    },
    label: {
      fontSize: 18,
      marginVertical: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
    // AI STYLES
    modalContainer: {
        backgroundColor: theme.card,
        borderRadius: 12,
        padding: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: 10,
      },
      modalInput: {
        backgroundColor: theme.inputBackground,
        borderColor: theme.inputBorder,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        color: theme.text,
        marginBottom: 15,
        textAlignVertical: 'top',
        minHeight: 80,
      },
      modalResponseContainer: {
        backgroundColor: theme.card,
        padding: 15,
        borderRadius: 8,
        borderColor: theme.cardBorder,
        borderWidth: 2,
        marginBottom: 10,
      },
      modalResponseText: {
        color: theme.text,
        fontSize: 16,
      },
      darkButton:{
        backgroundColor: theme.background,
        borderColor: theme.text,
        borderWidth: 2,
        paddingVertical: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 20,
        borderRadius: 14,
      },
        aiButtonText: {
          color: theme.text,
          fontSize: 16,
          fontWeight: '600',
          marginLeft: 8,
        }
  });
