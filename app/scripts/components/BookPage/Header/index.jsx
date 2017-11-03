import React from 'react'
import { css } from 'aphrodite'
import styles from './style'
import typography from '../../../style'
import image from '../../../../images/jsBook.jpg'
import { Default, Mobile } from '../../Responsive'

class Header extends React.PureComponent {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Default>
          <div className={css(styles.header)}>
            <img className={css(styles.image)} src={this.props.book.image} alt="Book pic" />
            <div className={css(styles.title)}>
              <div className={css(typography.headline)}>{this.props.book.title}</div>
              <div className={css(typography.subheading)}>{this.props.book.author}</div>
              <div className={css(typography.caption)}>{this.props.book.count}</div>
              <div className={css(typography.caption)}>{this.props.book.publisher}</div>
              <div className={css(typography.caption)}>{this.props.book.date}</div>
              <div className={css(typography.caption)}>{this.props.book.isbn}</div>
            </div>
          </div>
        </Default>
        <Mobile orientation="landscape">
          <div className={css(styles.header)}>
            <img className={css(styles.image)} src={this.props.book.image} alt="Book pic" />
            <div className={css(styles.title)}>
              <div className={css(typography.headline)}>{this.props.book.title}</div>
              <div className={css(typography.subheading)}>{this.props.book.author}</div>
              <div className={css(typography.caption)}>{this.props.book.count}</div>
              <div className={css(typography.caption)}>{this.props.book.publisher}</div>
              <div className={css(typography.caption)}>{this.props.book.date}</div>
              <div className={css(typography.caption)}>{this.props.book.isbn}</div>
            </div>
          </div>
        </Mobile>
        <Mobile orientation="portrait">
          <div className={css(styles.header, styles.headerMobile)}>
            <img className={css(styles.image)} src={this.props.book.image} alt="Book pic" />
            <div className={css(styles.title, styles.titleMobile)}>
              <div className={css(typography.headline)}>{this.props.book.title}</div>
              <div className={css(typography.subheading)}>{this.props.book.author}</div>
              <div className={css(typography.caption)}>{this.props.book.count}</div>
              <div className={css(typography.caption)}>{this.props.book.publisher}</div>
              <div className={css(typography.caption)}>{this.props.book.date}</div>
              <div className={css(typography.caption)}>{this.props.book.isbn}</div>
            </div>
          </div>
        </Mobile>
      </div>
    )
  }
}

export default Header
