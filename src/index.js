import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Redux Imports
import { Provider } from "react-redux";
import store from "./redux/store";

// Amplify Imports
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
