import React from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Responsive from 'react-responsive'
import { deleteUser } from '../../../actions/Users/Get'

const mapStateToProps = state => ({
  user: state.users.get,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteUser,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Logout extends React.Component {
  static muiName = 'IconMenu';
  render() {
    console.log(this.props)
    return (
      <IconMenu
        iconStyle={this.props.iconStyle}
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem>
          <Link style={{ textDecoration: 'none', color: '#000000' }} to="/login">
            Sign In
          </Link>
        </MenuItem>
        <MenuItem>
          <Link style={{ textDecoration: 'none', color: '#000000' }} to="/register">
            Sign Up
          </Link>
        </MenuItem>
      </IconMenu>
    )
  }
}

export default Logout
