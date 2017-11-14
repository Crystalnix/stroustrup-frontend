// @flow
import React from 'react'
import { withRouter, Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteUser } from '../../actions/Users/Get'
import Login from './Login'
import Logout from './Logout'
import { styles } from './style'
import type { Props } from './types'
import { typographyStyles } from '../../config/style'

const mapStateToProps = state => ({
  user: state.users.get,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteUser,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Header extends React.Component<Props> {
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return (
      <header>
        <AppBar
          title={<Link to="/book" style={{ ...typographyStyles.link, ...typographyStyles.colorWhite }}>Straustrup Library</Link>}
          iconElementRight={
            this.props.user.isAuth ?
              <Logout deleteUser={this.props.deleteUser} /> :
              <Login />
          }
          style={styles.appbar}
          showMenuIconButton={false}
          elevation="16"
        />
      </header>
    )
  }
}

export default Header
