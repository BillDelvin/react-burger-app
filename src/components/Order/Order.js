import React from "react";
import classess from "./Order.css";

const order = (props) => {
  const ingredients = [];

  for (let ignredientName in props.ingredients) {
    ingredients.push({ name: ignredientName, amount: props.ingredients[ignredientName] });
  }

  let ingredientOutput = ingredients.map((item) => {
    return (
      <span
        key={item.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {item.name}({item.amount})&nbsp;
      </span>
    );
  });

  return (
    <div className={classess.Order}>
      <p>ingredients : {ingredientOutput} </p>
      <p>
        price : <strong>IDR {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
