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

  // Simple fallback for when backend is not available
  const loadUserWithFallback = async (firebaseUser) => {
    try {
      // Try to use backend API if available
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const token = await firebaseUser.getIdToken();
      
      try {
        const response = await fetch(`${API_BASE_URL}/auth/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ token })
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setUser({
              id: data.data.uid,
              email: data.data.email,
              name: data.data.name,
              role: data.data.role,
            });
            localStorage.setItem('firebaseToken', token);
            return true;
          }
        }
      } catch (backendError) {
        console.warn('Backend not available, using fallback:', backendError.message);
      }
      
      // Fallback: Use Firebase data directly
      const role = firebaseUser.email === 'admin@luxe.com' ? 'admin' : 'user';
      const name = firebaseUser.displayName || firebaseUser.email.split('@')[0];
      
      setUser({
        id: firebaseUser.uid,
        email: firebaseUser.email,
        name: name,
        role: role,
      });
      
      // Still store token for future API calls
      localStorage.setItem('firebaseToken', token);
      return true;
      
    } catch (error) {
      console.error('Failed to load user:', error);
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const success = await loadUserWithFallback(firebaseUser);
        if (!success) {
          console.error('Failed to load user');
          setUser(null);
        }
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
      
      const success = await loadUserWithFallback(firebaseUser);
      if (!success) {
        await signOut(auth);
        return { success: false, error: 'Authentication failed' };
      }
      
      return { success: true, user: firebaseUser };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message || 'Unable to sign in' };
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      const firebaseUser = cred.user;
      
      const success = await loadUserWithFallback(firebaseUser);
      if (!success) {
        await signOut(auth);
        return { success: false, error: 'Google authentication failed' };
      }
      
      return { success: true, user: firebaseUser };
    } catch (error) {
      console.error('Google login error:', error);
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

      // Load user data (with fallback)
      const success = await loadUserWithFallback(firebaseUser);
      if (!success) {
        await signOut(auth);
        return { success: false, error: 'Account creation failed' };
      }

      return { success: true, user: firebaseUser };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: error.message || 'Unable to create account' };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('firebaseToken');
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const refreshSession = async () => {
    const firebaseUser = auth.currentUser;
    if (firebaseUser) {
      const success = await loadUserWithFallback(firebaseUser);
      if (success) {
        return true;
      } else {
        await signOut(auth);
        setUser(null);
        localStorage.removeItem('firebaseToken');
      }
    }
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
