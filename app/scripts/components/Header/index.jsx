// @flow
import React from 'react'
import { withRouter } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteUser } from '../../actions/User'
import { closeDrawer } from '../../actions/Drawer'
import Login from './Login'
import Logout from './Logout'
import { Header as styles } from './style'
import type { Props } from './types'

const mapStateToProps = state => ({
  user: state.user,
  drawer: state.drawer,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteUser,
  closeDrawer,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Header extends React.Component<Props> {
  componentWillMount() {
    if (!this.props.user.isAuth) this.props.closeDrawer()
  }
  render() {
    return (
      <header>
        <AppBar
          title="Straustrup Library"
          iconElementRight={this.props.user.isAuth ?
            <Logout deleteUser={this.props.deleteUser} /> :
            <Login />}
          style={styles.appbar}
          titleStyle={{cursor: 'pointer'}}
          showMenuIconButton={false}
          onTitleTouchTap={() => {this.props.router.push('/book')}}
          elevation={16}
        />
        <Drawer
          containerStyle={{zIndex: '1050'}}
          width={200}
          open={this.props.drawer}
        />
      </header>
    )
  }
}

export default Header
