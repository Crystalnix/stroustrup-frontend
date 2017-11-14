import React from 'react'
import { css } from 'aphrodite'
import { bindActionCreators } from 'redux'
import FlatButton from 'material-ui/FlatButton'
import openDescription from '../../../../../actions/UI/Description/index'
import styles from './style'
import { Desktop, Tablet, Mobile } from '../../../../../config/responsive'

class Description extends React.PureComponent {
  render() {
    return (
      <div>
        <Desktop>
          <div className={css(styles.description)}>
            <div className="body1">
              {this.props.text}
            </div>
          </div>
        </Desktop>
        <Tablet>
          <div className={css(styles.descriptionTablet)}>
            <div className="body1">
              {this.props.text}
            </div>
          </div>
        </Tablet>
        <Mobile>
          <div className={css(styles.descriptionMobile)}>
            <div className="body1">
              {this.props.text}
            </div>
          </div>
        </Mobile>
      </div>
    )
  }
}

export default Description
