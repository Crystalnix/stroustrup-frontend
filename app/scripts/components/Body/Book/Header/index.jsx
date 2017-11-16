import React from 'react'
import { css } from 'aphrodite'
import RaisedButton from 'material-ui/RaisedButton'
import styleSheet, { styles } from './style'
import { Default, Mobile } from '../../../../config/responsive'
import Info from './Info'
import History from './History'

class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <Default>
          <div className={css(styleSheet.header)}>
            <div>
              <img className={css(styleSheet.image)} src={this.props.book.image} alt="Book pic" />
            </div>
            <div className={css(styleSheet.title)}>
              <Info book={this.props.book} />
              <History requestData={this.props.requestData} />
            </div>
          </div>
        </Default>
        <Mobile>
          <div className={css(styleSheet.headerMobile)}>
            <div>
              <img className={css(styleSheet.image)} src={this.props.book.image} alt="Book pic" />
            </div>
            <div className={css(styleSheet.titleMobile)}>
              <Info book={this.props.book} />
              <History requestData={this.props.requestData} />
            </div>
          </div>
        </Mobile>
      </div>
    )
  }
}

export default Header
