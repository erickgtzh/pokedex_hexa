import React, {createContext, useState, useContext, ReactNode} from 'react';

interface CounterContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextProps | null>(null);

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounterContext must be used within a CounterProvider');
  }
  return context;
};

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({children}) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{count, setCount}}>
      {children}
    </CounterContext.Provider>
  );
};
