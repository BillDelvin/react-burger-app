import React, { Component } from "react";
import axios from "../../axios-order";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrder = [];
        for (let key in res.data) {
          fetchedOrder.push({
            ...res.data[key], //kenapa di res.data di kasi [key] agar dapat akses isi value yang di dalam nya scara langsung
            id: key,
          });
        }
        this.setState({ ladong: false, orders: fetchedOrder });
      })
      .catch((err) => {
        this.setState({ ladong: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => {
          return <Order key={order.id} ingredients={order.ingredients} price={order.price} />;
        })}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
