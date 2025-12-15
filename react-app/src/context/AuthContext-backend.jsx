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
import api from '../services/api';

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

  // Verify token with backend and get user data
  const verifyTokenWithBackend = async (token) => {
    try {
      const response = await api.auth.verifyToken(token);
      if (response.success) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error('Token verification failed:', error);
      return null;
    }
  };

  // Load user data from backend
  const loadUserWithBackend = async (firebaseUser) => {
    try {
      const token = await firebaseUser.getIdToken();
      const backendUser = await verifyTokenWithBackend(token);
      
      if (backendUser) {
        setUser({
          id: backendUser.uid,
          email: backendUser.email,
          name: backendUser.name,
          role: backendUser.role,
        });
        // Store token for API calls
        localStorage.setItem('firebaseToken', token);
      }
    } catch (error) {
      console.error('Failed to load user from backend:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await loadUserWithBackend(firebaseUser);
      } else {
        setUser(null);
        localStorage.removeItem('firebaseToken');
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
      await loadUserWithBackend(firebaseUser);
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
      await loadUserWithBackend(firebaseUser);
      return { success: true, user: firebaseUser };
    } catch (error) {
      return { success: false, error: error.message || 'Unable to sign in with Google' };
    }
  };

  const signup = async (name, email, password, confirmPassword) => {
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

      // Load user data from backend (creates profile automatically)
      await loadUserWithBackend(firebaseUser);

      return { success: true, user: firebaseUser };
    } catch (error) {
      return { success: false, error: error.message || 'Unable to create account' };
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem('firebaseToken');
  };

  const refreshSession = async () => {
    const firebaseUser = auth.currentUser;
    if (firebaseUser) {
      await loadUserWithBackend(firebaseUser);
      return true;
    }
    setUser(null);
    localStorage.removeItem('firebaseToken');
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
