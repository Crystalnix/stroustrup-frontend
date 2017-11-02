// @flow
import React from 'react'
import { withRouter } from 'react-router'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteUser } from '../../actions/User'
import { closeDrawer } from '../../actions/Drawer'
import Login from './Login'
import Logout from './Logout'
import { Header as styles } from './style'
import {
  Desktop,
  Tablet,
  Mobile,
} from '../Responsive'
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
    const appBarPropsDesktop = {
      title: 'Straustrup Library',
      iconElementRight: this.props.user.isAuth ?
        <Logout deleteUser={this.props.deleteUser} /> :
        <Login />,
      style: styles.appbar,
      titleStyle: { cursor: 'pointer' },
      showMenuIconButton: false,
      onTitleTouchTap: () => { this.props.router.push('/book') },
      elevation: 16,
    }
    const appBarPropsTablet = {
      ...appBarPropsDesktop,
      showMenuIconButton: true,
      iconElementRight: <div>tablet</div>,
    }
    const appBarPropsMobile = {
      ...appBarPropsTablet,
      iconElementRight: <div>mobile</div>,
    }
    return (
      <header>
        <Desktop>
          <AppBar {...appBarPropsDesktop} />
        </Desktop>
        <Tablet>
          <AppBar {...appBarPropsTablet} />
        </Tablet>
        <Mobile>
          <AppBar {...appBarPropsMobile} />
        </Mobile>
      </header>
    )
  }
}

export default Header
