import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import asyncComponent from './hoc/AsyncComponent/AsyncComponent'
import * as actions from './store/action/index'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Logout from './containers/Auth/Logout/Logout'

const asyncCheckOut = asyncComponent(() => {
  return import('./containers/CheckOut/CheckOut')
})

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders')
})

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth')
})

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp()
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    )

    // for authenticate user
    if (this.props.isAuthenticate) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckOut} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
      <Router>
        <div>
          <Layout>{routes}</Layout>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.auth.token !== null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
