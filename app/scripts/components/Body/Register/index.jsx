import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import {
  TextField,
} from 'redux-form-material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { requestRegister } from '../../../actions/Users/Register'

const required = value => (value == null ? 'Required' : undefined)
const emailValid = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined)

const form = {
  form: 'register',
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestRegister,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(form)
class Login extends React.Component {
  componentDidMount() {
  }

  submit = (values) => {
    this.props.requestRegister(values)
  }

  render() {
    return (
      <MuiThemeProvider>
        <form onSubmit={this.props.handleSubmit(this.submit)}>
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
          <RaisedButton
            type="submit"
            primary={true}
            label="Sign Up"
          />
        </form>
      </MuiThemeProvider>
    )
  }
}

export default Login
