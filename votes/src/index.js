import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducer";
import { App } from "./App";

export const store = createStore(reducer);

store.dispatch({
  type: "GOOD",
});
store.dispatch({
  type: "GOOD",
});
store.dispatch({
  type: "GOOD",
});
store.dispatch({
  type: "BAD",
});
store.dispatch({
  type: "BAD",
});
store.dispatch({
  type: "OK",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

renderApp();
store.subscribe(renderApp);
