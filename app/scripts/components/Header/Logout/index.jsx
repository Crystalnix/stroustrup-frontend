import React from 'react'
import Button from './Button'
import Responsive from 'react-responsive'

class Logout extends React.Component {
  render() {
    return (
      <Button label="Sign Out" path="/" onClick={this.props.deleteUser} />
    )
  }
}

export default Logout
