import React from 'react'
import { withRouter } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Header/'
import Body from './Body/index'

@withRouter
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={{position: 'absolute', width: '100%'}}>
          <Header />
          <Body>
            {this.props.children}
          </Body>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
