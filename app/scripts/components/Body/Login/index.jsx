import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import {
  TextField,
} from 'redux-form-material-ui'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { requestLogin } from '../../../actions/Users/Login'

const required = value => (value == null ? 'Required' : undefined)
const emailValid = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined)

const form = {
  form: 'login',
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestLogin,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(form)
class Login extends React.Component {
  submit = (values) => {
    this.props.requestLogin(values)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.submit)}
        style={{ textAlign: 'center' }}
      >
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
            type="submit"
            primary={true}
            label="Sign In"
          />
        </div>
      </form>
    )
  }
}

export default Login
