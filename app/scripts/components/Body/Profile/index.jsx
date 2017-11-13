import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  user: state.user,
})

@connect(mapStateToProps)
class Profile extends React.Component {
  render() {
    return (
      <div>
        Name: {this.props.user.name}
        Email: {this.props.user.email}
      </div>
    )
  }
}

export default Profile
