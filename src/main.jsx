import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";
import { ModalProvider } from "./context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  </React.StrictMode>
);
