import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { getCurrentUser } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import SignInScreen from './SignInScreen';

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();

    const unsubscribe = Hub.listen('auth', (data) => {
      if (['signIn', 'signOut'].includes(data.payload.event)) {
        checkUser();
      }
    });

    return unsubscribe;
  }, []);

  const checkUser = async () => {
    try {
      const { username } = (await getCurrentUser()) ?? {};
      setUser(username ?? null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) return <SignInScreen />;

  return <>{children}</>;
}
