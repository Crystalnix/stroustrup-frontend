import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import {
  TextField,
} from 'redux-form-material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { requestLogin } from '../actions/Login'

const required = value => (value == null ? 'Required' : undefined)
const emailValid = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined)

const form = {
  form: 'login',
}

const selector = formValueSelector('login')

const mapStateToProps = state => ({
  email: selector(state, 'email'),
  password: selector(state, 'password'),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestLogin,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(form)
class Login extends React.Component {
  handleClick = (event) => {
    event.preventDefault()
    this.props.requestLogin(this.props.email, this.props.password)
  }

  render() {
    return (
      <form>
        <div>
          <Field
            name="email"
            component={TextField}
            hintText="Email"
            type="email"
            floatingLabelText="Email"
            validate={[required, emailValid]}
          />
        </div>
        <div>
          <Field
            name="password"
            component={TextField}
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            validate={[required]}
          />
        </div>
        <div>
          <RaisedButton
            onClick={this.handleClick}
            primary={true}
            label="Sign In"
          />
        </div>
      </form>
    )
  }
}

export default Login
