import React from 'react'
import { css } from 'aphrodite'
import styleSheet from './style'

class Info extends React.PureComponent {
  render() {
    return (
      <div className={css(styleSheet.info)}>
        {
          !this.props.history.id &&
          'Noone took this book'
        }
        {
          this.props.history.putDate &&
          <div>
            {this.props.history.user.name} is the last one who took this book
            from {this.props.history.takeDate} to {this.props.history.putDate}
          </div>
        }
        {
          this.props.history.id &&
          !this.props.history.putDate &&
          `${this.props.history.user.name} took this book ${this.props.history.takeDate}`
        }
      </div>
    )
  }
}

export default Info
