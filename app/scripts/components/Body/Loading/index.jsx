import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { CircularProgress } from 'material-ui'

class Loading extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <CircularProgress size={100} thickness={5} />
      </MuiThemeProvider>
    )
  }
}

export default Loading
