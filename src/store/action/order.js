import * as actionType from './actionTypes'
import axios from '../../axios-order'

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

export const purchaseBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart())
    axios
      .post('/orders.json?auth=' + token, orderData)
      .then((res) => {
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

export const fetchOrder = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrderStart())
    const queryParams =
      '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
    axios
      .get('/orders.json' + queryParams)
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
