import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('edupanel_auth');
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.user);
      setSchool(parsed.school);
    }
    setLoading(false);
  }, []);

  const login = (data) => {
    localStorage.setItem('edupanel_token', data.token);
    localStorage.setItem(
      'edupanel_auth',
      JSON.stringify({ user: data.user, school: data.school }),
    );
    setUser(data.user);
    setSchool(data.school);
  };

  const logout = () => {
    localStorage.removeItem('edupanel_token');
    localStorage.removeItem('edupanel_auth');
    setUser(null);
    setSchool(null);
  };

  return (
    <AuthContext.Provider value={{ user, school, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


