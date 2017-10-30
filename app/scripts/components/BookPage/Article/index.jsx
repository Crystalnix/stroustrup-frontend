import React from 'react'
import Paper from 'material-ui/Paper'
import Description from './Description/index'
import styles from './style'

class Aricle extends React.PureComponent {
  render() {
    return (
      <Paper style={styles.paper}>
        <Description opened={false} />
      </Paper>
    )
  }
}
export default Aricle
