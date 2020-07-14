import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "../../../axios-order"
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler"
import * as actionTypes from "../../../store/action/index"
import Spinner from "../../../components/UI/Spinner/Spinner"
import Button from "../../../components/UI/Button/Button"
import classes from "./ContactData.css"
import Input from "../../../components/UI/Input/Input"

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        //key
        elementType: "input", // harus sama dengan type text html
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input", // harus sama dengan type text html
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipcode: {
        elementType: "input", // harus sama dengan type text html
        elementConfig: {
          type: "text",
          placeholder: "Zip code",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input", // harus sama dengan type text html
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input", // harus sama dengan type text html
        elementConfig: {
          type: "email", //html default type
          placeholder: "Your E-mail",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: "select", // harus sama dengan type text html
        elementConfig: {
          options: [
            { value: "Fastest", displayValue: "Fastest" },
            { value: "Cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "fastest",
        validation: {},
        valid: true,
      },
    },
    formIsValid: false,
  }

  orderHandler = (event) => {
    event.preventDefault()
    const formData = {}
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
    }
    const orderData = {
      ingredients: this.props.ings,
      price: this.props.price,
      order: formData,
    }
    this.props.onOrderBurger(orderData)
  }

  checkValidity(value, rules) {
    let isValid = true

    if (!rules) {
      return true
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    return isValid
  }

  inputChangeHandler = (event, inputIdentifier) => {
    const updateOrderForm = { ...this.state.orderForm }
    const updateFormElement = { ...updateOrderForm[inputIdentifier] }
    updateFormElement.value = event.target.value
    updateFormElement.valid = this.checkValidity(
      updateFormElement.value,
      updateFormElement.validation
    )
    updateFormElement.touched = true
    updateOrderForm[inputIdentifier] = updateFormElement

    let formIsValid = true
    for (let inputIdentifier in updateOrderForm) {
      formIsValid = updateOrderForm[inputIdentifier].valid && formIsValid
    }

    this.setState({ orderForm: updateOrderForm, formIsValid: formIsValid })
  }

  render() {
    const formElementArray = []
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      })
    }

    let form = (
      <form className={classes.ContactData} onSubmit={this.orderHandler}>
        <h4>Enter Contact Data :</h4>
        {formElementArray.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) => this.inputChangeHandler(event, formElement.id)}
            />
          )
        })}
        {/* <Input elementType="..." elementConfig="..." value="..." /> */}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          Order
        </Button>
      </form>
    )
    if (this.props.loading) {
      form = <Spinner />
    }
    return <div>{form}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData) => dispatch(actionTypes.purchaseBurger(orderData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios))