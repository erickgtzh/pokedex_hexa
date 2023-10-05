import React, {createContext, useState, useContext, useEffect} from 'react';
import User from '../models/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserContextProps {
  user: User | null;
  updateUser: (user: User) => Promise<void>;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  updateUser: async () => {},
});

export const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = async (newUser: User) => {
    setUser(newUser);
    await AsyncStorage.setItem('user', JSON.stringify(newUser));
  };

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{user, updateUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
