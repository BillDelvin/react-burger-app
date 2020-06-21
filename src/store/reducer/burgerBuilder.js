import * as actionType from "../action/actionTypes"

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 0.4,
}

const burgerBuilder = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientsName]: state.ingredients[action.ingredientsName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientsName],
      }
    case actionType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientsName]: state.ingredients[action.ingredientsName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientsName],
      }
    default:
      return state
  }
}

export default burgerBuilder
