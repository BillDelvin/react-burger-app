import * as actionType from "./actionTypes"
import axios from "../../axios-order"

const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionType.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  }
}

const purchaseBurgerFail = (error) => {
  return {
    type: actionType.PURCHASE_BURGER_FAIL,
    error: error,
  }
}

const purchaseBurgerStart = () => {
  return {
    type: actionType.PURCHASE_BURGER_START,
  }
}

export const purchaseBurger = (orderData) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart())
    axios
      .post("/orders.json", orderData)
      .then((res) => {
        console.log(res.data)
        dispatch(purchaseBurgerSuccess(res.data.name, orderData))
      })
      .catch((err) => {
        dispatch(purchaseBurgerFail(err))
      })
  }
}

export const purchaseInit = () => {
  return {
    type: actionType.PURCHASE_INIT,
  }
}

export const fetchOrderStart = () => {
  return {
    type: actionType.FETCH_ORDERS_START,
  }
}

const fetchOrderSuccess = (orders) => {
  return {
    type: actionType.FETCH_ORDERS_SUCCESS,
    orders: orders,
  }
}

const fetchOrderFail = (error) => {
  return {
    type: actionType.FETCH_ORDERS_FAIL,
    error: error,
  }
}

export const fetchOrder = () => {
  return (dispatch) => {
    dispatch(fetchOrderStart())
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrder = []
        for (let key in res.data) {
          fetchedOrder.push({
            ...res.data[key], //kenapa di res.data di kasi [key] agar dapat akses isi value yang di dalam nya scara langsung
            id: key,
          })
        }
        dispatch(fetchOrderSuccess(fetchedOrder))
      })
      .catch((err) => {
        dispatch(fetchOrderFail(err))
      })
  }
}
