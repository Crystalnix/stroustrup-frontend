import React from 'react'
import { css } from 'aphrodite'
import { bindActionCreators } from 'redux'
import FlatButton from 'material-ui/FlatButton'
import openDescription from '../../../../../actions/UI/Description/index'
import styles from './style'

class Description extends React.PureComponent {
  render() {
    return (
      <div style={{ padding: '50px' }}>
        <div className={css(styles.description)}>
          <div className="body1">
            {this.props.text}
          </div>
        </div>
      </div>
    )
  }
}

export default Description
