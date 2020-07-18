import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../../components/UI/Button/Button'

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igItem) => {
        return (
          <li key={igItem}>
            <span style={{ textTransform: 'capitalize' }}>{igItem}</span>:
            {this.props.ingredients[igItem]}
          </li>
        )
      }
    )

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout? </p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    )
  }
}

export default OrderSummary
