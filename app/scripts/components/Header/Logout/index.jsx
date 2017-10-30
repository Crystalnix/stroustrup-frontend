import React from 'react'
import Button from './Button'
import Responsive from 'react-responsive'

const Desktop = props => <Responsive {...props} minWidth={992} />
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />
// const Mobile = props => <Responsive {...props} maxWidth={767} />
// const Default = props => <Responsive {...props} minWidth={768} />

class Logout extends React.Component {
  render() {
    return (
      <Desktop>
        <Button label="Sign Out" path="/" onClick={this.props.deleteUser} />
      </Desktop>
    )
  }
}

export default Logout
