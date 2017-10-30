import React from 'react'
import Button from './Button'

class Logout extends React.PureComponent {
  render() {
    return (
      <div>
        <Button label="Sign Out" path="/" onClick={this.props.deleteUser} />
      </div>
    )
  }
}

export default Logout
