import React from 'react'
import Button from './Button'

class Login extends React.PureComponent {
  render() {
    return (
      <div>
        <Button label="Sign In" path="/login" />
        <Button label="Sign Up" path="/register" />
      </div>
    )
  }
}

export default Login
