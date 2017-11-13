import React from 'react'
import { connect } from 'react-redux'
import History from './History'

const mapStateToProps = state => ({
  user: state.users.get,
})

@connect(mapStateToProps)
class Profile extends React.Component {
  render() {
    return (
      <div>
        <History />
      </div>
    )
  }
}

export default Profile
