import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import { css } from 'aphrodite'
import Description from './Description/index'
import styles from './style'
import { Default, Mobile } from '../../Responsive'
import Comments from './Comments'

class Aricle extends PureComponent {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Default>
          <Paper className={css(styles.paper)}>
            <Description text={this.props.book.description} opened={false} />
            <Comments />
          </Paper>
        </Default>
        <Mobile>
          <Paper className={css(styles.paper, styles.paperMobile)}>
            <Description text={this.props.book.description} opened={false} />
            <Comments />
          </Paper>
        </Mobile>
      </div>
    )
  }
}

export default Aricle
