import * as actionType from "./action"

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 0.4,
}

const reducer = (state = initialState, action) => {
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

export default reducer
