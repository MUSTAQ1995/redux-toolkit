import { StrictMode } from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/Store";
import { Provider } from "react-redux";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
