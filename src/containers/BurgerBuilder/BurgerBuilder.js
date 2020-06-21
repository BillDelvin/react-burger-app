import React, { Component } from "react"
import { connect } from "react-redux"
import Aux from "../../hoc/Aux/Aux"
import axios from "../../axios-order"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import Spinner from "../../components/UI/Spinner/Spinner"
import * as bugerBuilderActions from "../../store/action/index"

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  }

  componentDidMount() {}

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    return sum > 0
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    })
  }

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    })
  }

  purchaseContinueHandler = () => {
    this.props.history.push("/checkout")
  }

  render() {
    const disabledInfo = {
      ...this.props.ings,
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemove={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchaseable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      )
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCanceled={this.purchaseCancelHandler}
          price={this.props.price}
          purchaseContinue={this.purchaseContinueHandler}
        />
      )
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  }
}

const mapDispatchToProps = (dispacth) => {
  return {
    onIngredientAdded: (ingName) => dispacth(bugerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispacth(bugerBuilderActions.removeIngredient(ingName)),
  }
}

// can use this code
// const mapDispatchToProps = {
//   onIngredientAdded: bugerBuilderActions.addIngredient,
//   onIngredientRemoved: bugerBuilderActions.removeIngredient,
// }

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))
