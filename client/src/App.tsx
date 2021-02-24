import * as React from "react";
import Landing from "./components/Landing";
import { InputProvider } from "./context/InputContext";
const App = () => {
  return (
    <InputProvider>
      <div className="pt-48">
        <Landing />
      </div>
    </InputProvider>
  );
};

export default App;
