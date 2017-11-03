import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Header/'
import Body from './Body'

class App extends React.Component {
  componentWillMount() {

  }

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
