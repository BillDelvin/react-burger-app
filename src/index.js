import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "react-redux"
import { createStore } from "redux"
import burgerBuilder from "./store/reducer/burgerBuilder"

const store = createStore(
  burgerBuilder,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"))
registerServiceWorker()
