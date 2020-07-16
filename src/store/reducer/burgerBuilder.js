import * as actionType from "../action/actionTypes"
import { updateObject } from "../utility"

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 0.4,
}

const addIngredient = (state, action) => {
  const updateIngredient = {
    [action.ingredientsName]: state.ingredients[action.ingredientsName] + 1,
  }
  const updateIngredients = updateObject(state.ingredients, updateIngredient)
  const updateState = {
    ingredients: updateIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientsName],
    building: true,
  }
  return updateObject(state, updateState)
}

const removeIngredient = (state, action) => {
  const updateIng = {
    [action.ingredientsName]: state.ingredients[action.ingredientsName] - 1,
  }
  const updateIngs = updateObject(state.ingredients, updateIng)
  const updateSt = {
    ingredients: updateIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientsName],
  }
  return updateObject(state, updateSt)
}

const setIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
    building: false,
  })
}

const fetchIngredientFailed = (state, action) => {
  return updateObject(state, { error: true })
}

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return addIngredient(state, action)
    case actionType.REMOVE_INGREDIENT:
      return removeIngredient(state, action)
    case actionType.SET_INGREDIENT:
      return setIngredient(state, action)
    case actionType.FETCH_INGREDIENT_FAILED:
      return fetchIngredientFailed(state, action)
    default:
      return state
  }
}

export default burgerBuilderReducer
