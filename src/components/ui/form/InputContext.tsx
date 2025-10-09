import { createContext, useContext } from 'react';

export type InputContextType = {
  allLabelWidth?: string;
};

export const InputContext = createContext<InputContextType>({});
export const useInputContext = () => useContext(InputContext);
