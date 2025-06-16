import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null); // 'nurse' or 'store'

  const login = (enteredPassword) => {
    if (enteredPassword === 'nurse123') {
      setRole('nurse');
      return 'nurse';
    } else if (enteredPassword === 'store123') {
      setRole('store');
      return 'store';
    } else {
      return null;
    }
  };

  const logout = () => setRole(null);

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
