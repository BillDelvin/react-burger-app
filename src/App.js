import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from "./hoc/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import CheckOut from "./containers/CheckOut/CheckOut"
import Orders from "./containers/Orders/Orders"
import Auth from "./containers/Auth/Auth"
import Logout from "./containers/Auth/Logout/Logout"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/logout" component={Logout} />
              <Route path="/checkout" component={CheckOut} />
              <Route path="/orders" component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Layout>
        </div>
      </Router>
    )
  }
}

export default App
