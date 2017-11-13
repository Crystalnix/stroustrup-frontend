import React from 'react'
import { css } from 'aphrodite'
import typography from '../../../../../config/style'

class Info extends React.PureComponent {
  render() {
    return (
      <div>
        <div className={css(typography.headline)}>{this.props.book.title}</div>
        <div className={css(typography.subheading)}>{this.props.book.subtitle}</div>
        <div className={css(typography.caption)}>Author: {this.props.book.author}</div>
        <div className={css(typography.caption)}>Publisher: {this.props.book.publisher}</div>
        <div className={css(typography.caption)}>Published date: {this.props.book.date}</div>
        <div className={css(typography.caption)}>Pages: {this.props.book.count}</div>
        <div className={css(typography.caption)}>ISBN-13: {this.props.book.isbn}</div>
      </div>
    )
  }
}

export default Info
