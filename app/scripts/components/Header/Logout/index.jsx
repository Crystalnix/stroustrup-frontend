import React from 'react'
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteUser } from '../../../actions/Users/Get'
import { typographyStyles } from '../../../config/style'

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
    return (
      <IconMenu
        iconStyle={this.props.iconStyle}
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem>
          <Link style={typographyStyles.linkBlack} to={`/user/${this.props.user.id}`}>
            Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <Link style={typographyStyles.linkBlack} to="/history">
            History
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/" style={typographyStyles.linkBlack} onClick={this.props.deleteUser}>
            Sign out
          </Link>
        </MenuItem>
      </IconMenu>
    )
  }
}

export default Logout
