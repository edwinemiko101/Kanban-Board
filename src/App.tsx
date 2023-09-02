import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { CSSReset } from "@chakra-ui/core";
import Kaban from "pages/Kaban";

import { store, persistor } from "models";
import { StoreProvider } from "easy-peasy";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <CSSReset />
          <Kaban />
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
