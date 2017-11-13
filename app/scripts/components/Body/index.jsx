import React from 'react'
import { connect } from 'react-redux'

const styles = new (function () {
  this.contentCenter = {
    height: 'calc(100vh - 64px)',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  this.containerMarginTop = {
    marginTop: '64px',
  }

  this.containerDrawerOpen = {
    ...this.containerMarginTop,
  }
})()

const mapStateToProps = state => ({
  drawer: state.drawer,
})

@connect(mapStateToProps)
class Body extends React.Component {
  render() {
    return (
      <div
        style={
          styles.containerMarginTop
        }
      >
        {this.props.children}
      </div>
    )
  }
}

export default Body
