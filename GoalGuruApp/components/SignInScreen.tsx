import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { signUp, signIn, confirmSignUp } from '@aws-amplify/auth';

export default function SignInScreen() {
  const [mode, setMode] = useState<'signIn' | 'signUp' | 'confirm'>('signIn');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp({
        username,
        password,
        options:{
        userAttributes: { email },
        }
      });
      setMode('confirm');
      Alert.alert('Verification code sent to your email');
    } catch (error: any) {
      console.error('Sign up error:', error);
      Alert.alert('Sign up error', error.message || 'Unknown error');
    }
  };

  const handleConfirm = async () => {
    try {
      await confirmSignUp({
        username,
        confirmationCode: code,
      });
      setMode('signIn');
      Alert.alert('Account confirmed. You can now sign in.');
    } catch (error: any) {
      console.error('Confirmation error:', error);
      Alert.alert('Confirmation error', error.message || 'Unknown error');
    }
  };

  const handleSignIn = async () => {
    try {
      await signIn({ username, password });
    } catch (error: any) {
      console.error('Sign in error:', error);
      Alert.alert('Sign in error', error.message || 'Unknown error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {mode === 'signUp'
          ? 'Create your account'
          : mode === 'confirm'
          ? 'Confirm your sign-up'
          : 'Welcome back'}
      </Text>

      {mode === 'signUp' && (
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          style={styles.input}
        />
      )}

      {(mode === 'signIn' || mode === 'signUp') && (
        <>
          <TextInput
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            style={styles.input}
          />
        </>
      )}

      {mode === 'confirm' && (
        <>
          <TextInput
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="Confirmation Code"
            onChangeText={setCode}
            value={code}
            keyboardType="number-pad"
            style={styles.input}
          />
        </>
      )}

      {mode === 'signIn' && <Button title="Sign In" onPress={handleSignIn} />}
      {mode === 'signUp' && <Button title="Sign Up" onPress={handleSignUp} />}
      {mode === 'confirm' && <Button title="Confirm Sign Up" onPress={handleConfirm} />}

      <View style={{ marginTop: 20 }}>
        {mode !== 'signIn' && <Button title="Back to Sign In" onPress={() => setMode('signIn')} />}
        {mode !== 'signUp' && <Button title="Create Account" onPress={() => setMode('signUp')} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  input: {
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
  },
});
