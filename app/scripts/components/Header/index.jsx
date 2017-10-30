// @flow
import React from 'react'
import { withRouter } from 'react-router'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Responsive from 'react-responsive'
import { deleteUser } from '../../actions/User'
import { closeDrawer } from '../../actions/Drawer'
import Login from './Login'
import Logout from './Logout'
import { Header as styles } from './style'
import type { Props } from './types'

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />
const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

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
    let appBarPropsDesktop = {
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
    return (
      <header>
        <AppBar {...appBarPropsDesktop} />
      </header>
    )
  }
}

export default Header
