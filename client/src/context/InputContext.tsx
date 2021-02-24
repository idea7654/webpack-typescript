import * as React from "react";
import { createContext, useReducer } from "react";
import InputReducer from "../reducer/InputReducer";

const InputContext: React.Context<{}> = createContext({});

const InputProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [value, valueDispatch] = useReducer<any>(InputReducer, "");

  return (
    <InputContext.Provider value={[value, valueDispatch]}>
      {children}
    </InputContext.Provider>
  );
};

export { InputProvider };

export default InputContext;
