import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/SideBar.css";
import "./styles/HomePage.css";
import "./styles/LikePage.css";

ReactDOM.render(
  <Provider store={configureStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
