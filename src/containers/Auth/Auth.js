import React, { Component } from "react"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action/index"
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"
import Spinner from "../../components/UI/Spinner/Spinner"
import classes from "./Auth.css"

class Auth extends Component {
  state = {
    controls: {
      email: {
        //key
        elementType: "input", // harus sama dengan type text html
        elementConfig: {
          type: "email",
          placeholder: "your email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        //key
        elementType: "input", // harus sama dengan type text html
        elementConfig: {
          type: "password",
          placeholder: "your password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSingup: true,
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
    if (rules.isEmail) {
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      isValid = pattern.test(value) && isValid
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/
      isValid = pattern.test(value) && isValid
    }

    return isValid
  }

  inputChangeHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true,
      },
    }
    this.setState({
      controls: updatedControls,
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSingup
    )
  }

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSingup: !prevState.isSingup }
    })
  }

  render() {
    const formElementArray = []
    for (let key in this.state.controls) {
      formElementArray.push({
        id: key,
        config: this.state.controls[key],
      })
    }

    let form = formElementArray.map((form) => {
      return (
        <Input
          key={form.id}
          elementType={form.config.elementType}
          elementConfig={form.config.elementConfig}
          value={form.config.value}
          invalid={!form.config.valid}
          shouldValidate={form.config.validation}
          touched={form.config.touched}
          changed={(event) => this.inputChangeHandler(event, form.id)}
        />
      )
    })

    if (this.props.loading) {
      form = <Spinner />
    }

    let errorMessage = null
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>
    }
    return (
      <div className={classes.Auth}>
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
        <Button clicked={this.switchAuthModeHandler} btnType="Danger">
          SWITCH TO {this.state.isSingup ? "SIGIN" : "SIGNUP"}
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  }
}

const mapDispatchToPorps = (dispatch) => {
  return {
    onAuth: (email, password, isSingup) => dispatch(actionTypes.auth(email, password, isSingup)),
  }
}

export default connect(mapStateToProps, mapDispatchToPorps)(Auth)
