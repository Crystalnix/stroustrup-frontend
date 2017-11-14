// @flow
import React from 'react'
import { withRouter, Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteUser } from '../../actions/Users/Get'
import Login from './Login'
import Logout from './Logout'
import { Header as styles } from './style'
import type { Props } from './types'

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
    const appBarPropsDesktop = {
      title: <Link to="/book" style={{ color: '#fff', textDecoration: 'none' }}>Straustrup Library</Link>,
      iconElementRight: this.props.user.isAuth ?
        <Logout deleteUser={this.props.deleteUser} /> :
        <Login />,
      style: styles.appbar,
      showMenuIconButton: false,
      elevation: 16,
    }
    return (
      <header>
        <AppBar
          title={<Link to="/book" style={{ color: '#fff', textDecoration: 'none' }}>Straustrup Library</Link>}
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
