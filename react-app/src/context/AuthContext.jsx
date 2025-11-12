import React, { createContext, useContext, useState, useEffect } from 'react';

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

  // Initialize auth state from localStorage
  useEffect(() => {
    // Initialize default users if none exist
    const existingUsers = JSON.parse(localStorage.getItem('luxe-users') || '[]');
    if (existingUsers.length === 0) {
      const defaultUsers = [
        {
          id: '1',
          name: 'Admin User',
          email: 'admin@luxe.com',
          password: 'admin123',
          role: 'admin'
        },
        {
          id: '2',
          name: 'Regular User',
          email: 'user@luxe.com',
          password: 'user123',
          role: 'user'
        }
      ];
      localStorage.setItem('luxe-users', JSON.stringify(defaultUsers));
    }

    const storedUser = localStorage.getItem('luxe-user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('luxe-user');
      }
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('luxe-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('luxe-user');
    }
  }, [user]);

  const login = (email, password) => {
    // Simple authentication logic - in a real app, this would be an API call
    const users = JSON.parse(localStorage.getItem('luxe-users') || '[]');

    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      const userData = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role
      };
      setUser(userData);
      return { success: true };
    }

    return { success: false, error: 'Invalid email or password' };
  };

  const signup = (name, email, password, confirmPassword) => {
    // Validation
    if (!name.trim()) {
      return { success: false, error: 'Name is required' };
    }

    if (!email.trim()) {
      return { success: false, error: 'Email is required' };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }

    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters long' };
    }

    if (password !== confirmPassword) {
      return { success: false, error: 'Passwords do not match' };
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('luxe-users') || '[]');
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      return { success: false, error: 'An account with this email already exists' };
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      password,
      role: 'user' // Default role is 'user', admin can be set manually in localStorage
    };

    users.push(newUser);
    localStorage.setItem('luxe-users', JSON.stringify(users));

    // Auto-login after signup
    const userData = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role
    };
    setUser(userData);

    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const value = {
    user,
    isLoading,
    login,
    signup,
    logout,
    isAdmin,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
