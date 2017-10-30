import React from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'

class Button extends React.PureComponent {
  render() {
    return (
      <Link to={this.props.path} onClick={this.props.onClick}>
        <FlatButton style={this.props.style} label={this.props.label} />
      </Link>
    )
  }
}

export default Button
