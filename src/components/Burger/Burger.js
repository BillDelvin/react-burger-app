import React from "react"
import classes from "./Burger.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const burger = (props) => {
  console.log(props)
  let transformIngredients = Object.keys(props.ingredients)
    .map((igItem) => {
      return [...Array(props.ingredients[igItem])].map((_, i) => {
        return <BurgerIngredient key={igItem + i} type={igItem} />
      })
    })
    .reduce((prevVal, currVal) => {
      return prevVal.concat(currVal)
    }, [])
  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {/* <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" /> */}
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger
