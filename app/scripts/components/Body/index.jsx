import React from 'react'
import { connect } from 'react-redux'
import { styles } from './style'

const mapStateToProps = state => ({
  drawer: state.drawer,
})

@connect(mapStateToProps)
class Body extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

export default Body
