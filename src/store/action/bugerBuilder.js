import * as actionTypes from "./actionTypes"
import axios from "../../axios-order"

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientsName: name,
  }
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientsName: name,
  }
}

const setIngredient = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENT,
    ingredients: ingredients,
  }
}

const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENT_FAILED,
  }
}

export const initIngredient = () => {
  return (dispatch) => {
    axios
      .get("ingredients.json")
      .then((res) => {
        dispatch(setIngredient(res.data))
      })
      .catch((err) => {
        dispatch(fetchIngredientsFailed())
      })
  }
}
