import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'

class Loading extends React.PureComponent {
  render() {
    return (

      <LinearProgress
        mode="indeterminate"
        style={{ backgroundColor: '#ffffff' }}
      />
    )
  }
}

export default Loading
