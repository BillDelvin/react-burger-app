import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../../components/UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igItem => {
    return (
      <li key={igItem}>
        <span style={{ textTransform: "capitalize" }}>{igItem}</span>:
        {props.ingredients[igItem]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout? </p>
    </Aux>
  );
};

export default orderSummary;
