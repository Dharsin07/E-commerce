import { auth } from '../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

// Firebase authentication service that integrates with backend
export const firebaseAuthService = {
  // Login with email/password
  login: async (email, password) => {
    try {
      const cleanedEmail = email.trim().toLowerCase();
      const cred = await signInWithEmailAndPassword(auth, cleanedEmail, password);
      const token = await cred.user.getIdToken();
      
      // Store token for backend verification
      localStorage.setItem('firebaseToken', token);
      
      return { 
        success: true, 
        user: cred.user,
        token: token
      };
    } catch (error) {
      console.error('Firebase login error:', error);
      return { 
        success: false, 
        error: error.message || 'Unable to sign in' 
      };
    }
  },

  // Login with Google
  loginWithGoogle: async () => {
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      const token = await cred.user.getIdToken();
      
      // Store token for backend verification
      localStorage.setItem('firebaseToken', token);
      
      return { 
        success: true, 
        user: cred.user,
        token: token
      };
    } catch (error) {
      console.error('Firebase Google login error:', error);
      return { 
        success: false, 
        error: error.message || 'Unable to sign in with Google' 
      };
    }
  },

  // Signup new user
  signup: async (name, email, password, confirmPassword) => {
    const cleanedName = name.trim();
    const cleanedEmail = email.trim().toLowerCase();

    // Validation
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

      // Get token for backend verification
      const token = await firebaseUser.getIdToken();
      
      // Store token for backend verification
      localStorage.setItem('firebaseToken', token);

      return { 
        success: true, 
        user: firebaseUser,
        token: token
      };
    } catch (error) {
      console.error('Firebase signup error:', error);
      return { 
        success: false, 
        error: error.message || 'Unable to create account' 
      };
    }
  },

  // Logout from Firebase
  logout: async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('firebaseToken');
      return { success: true };
    } catch (error) {
      console.error('Firebase logout error:', error);
      return { success: false, error: error.message || 'Unable to sign out' };
    }
  },

  // Get current user token
  getCurrentToken: async () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      return await currentUser.getIdToken();
    }
    return null;
  },

  // Get current user
  getCurrentUser: () => {
    return auth.currentUser;
  }
};
