// src/hooks/useAuth.ts
import { useState } from 'react';
import Auth from '@aws-amplify/auth'; // ✅ correct import for Amplify v6

export function useAuth() {
  const [user, setUser] = useState<any>(null);

  const signUp = async (username: string, password: string, email: string) => {
    const result = await Auth.signUp({
      username,
      password,
      options: {
        userAttributes: { email },
      },
    });
    return result; // contains result.userId, nextStep, etc.
  };

  const confirmSignUp = async (username: string, code: string) => {
    return await Auth.confirmSignUp({ username, confirmationCode: code });
  };

  const signIn = async (username: string, password: string) => {
    const signedInUser = await Auth.signIn({ username, password }); // ✅ object syntax is correct for v6
    setUser(signedInUser);
    return signedInUser;
  };

  const signOut = async () => {
    await Auth.signOut();
    setUser(null);
  };

  return { user, signUp, confirmSignUp, signIn, signOut };
}
