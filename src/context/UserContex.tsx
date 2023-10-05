// context/UserContext.ts
import React, {createContext, useState, useContext} from 'react';
import User from '../models/User';

interface UserContextProps {
  user: User | null;
  updateUser: (user: User) => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  updateUser: () => {},
});

export const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(
    new User('avatar_url', 'John Doe', '01-01-2000'),
  );

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

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
