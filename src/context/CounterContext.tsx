import React, {createContext, useReducer, useContext} from 'react';

interface State {
  count: number;
}

type Action = {type: 'INCREMENT'} | {type: 'DECREMENT'};

const CounterContext = createContext<
  {state: State; dispatch: React.Dispatch<Action>} | undefined
>(undefined);

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

export const CounterProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(counterReducer, {count: 0});

  return (
    <CounterContext.Provider value={{state, dispatch}}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounterContext must be used within a CounterProvider');
  }
  return context;
};
