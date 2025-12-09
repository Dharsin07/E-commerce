import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { supabase, upsertProfile, getProfile } from '../lib/supabase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load profile from Supabase and merge with Firebase user
  const loadUserWithProfile = async (firebaseUser) => {
    const profile = await getProfile(firebaseUser.uid);
    const role = profile?.role || (firebaseUser.email === 'admin@luxe.com' ? 'admin' : 'user');
    const name = profile?.name || firebaseUser.displayName || '';
    setUser({
      id: firebaseUser.uid,
      email: firebaseUser.email,
      name,
      role,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await loadUserWithProfile(firebaseUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const cleanedEmail = email.trim().toLowerCase();
      const cred = await signInWithEmailAndPassword(auth, cleanedEmail, password);
      const firebaseUser = cred.user;
      await loadUserWithProfile(firebaseUser);
      return { success: true, user: firebaseUser };
    } catch (error) {
      return { success: false, error: error.message || 'Unable to sign in' };
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      const firebaseUser = cred.user;
      await loadUserWithProfile(firebaseUser);
      return { success: true, user: firebaseUser };
    } catch (error) {
      return { success: false, error: error.message || 'Unable to sign in with Google' };
    }
  };

  const signup = async (name, email, password, confirmPassword) => {
    console.log('AuthContext signup:', { name, email, password: '***', confirmPassword });
    const cleanedName = name.trim();
    const cleanedEmail = email.trim().toLowerCase();

    if (!cleanedName) {
      return { success: false, error: 'Name is required' };
    }

    if (!cleanedEmail) {
      return { success: false, error: 'Email is required' };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanedEmail)) {
      return { success: false, error: 'Please enter a valid email address' };
    }

    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters long' };
    }

    if (password !== confirmPassword) {
      return { success: false, error: 'Passwords do not match' };
    }

    try {
      const cred = await createUserWithEmailAndPassword(auth, cleanedEmail, password);
      const firebaseUser = cred.user;

      // Set displayName in Firebase
      if (cleanedName) {
        await updateProfile(firebaseUser, { displayName: cleanedName });
      }

      // Store profile in Supabase
      const role = firebaseUser.email === 'admin@luxe.com' ? 'admin' : 'user';
      await upsertProfile(firebaseUser.uid, firebaseUser.email, cleanedName, role);

      setUser({
        id: firebaseUser.uid,
        email: firebaseUser.email,
        name: cleanedName,
        role,
      });

      return { success: true, user: firebaseUser };
    } catch (error) {
      return { success: false, error: error.message || 'Unable to create account' };
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const refreshSession = async () => {
    const firebaseUser = auth.currentUser;
    if (firebaseUser) {
      await loadUserWithProfile(firebaseUser);
      return true;
    }
    setUser(null);
    return false;
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const value = {
    user,
    loading: isLoading,
    login,
    signup,
    logout,
    refreshSession,
    loginWithGoogle,
    isAdmin,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
