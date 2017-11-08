import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { css } from 'aphrodite'
import styles from './style'
import typography from '../../../style'
import { Default, Mobile } from '../../Responsive'
import { requestBookTake } from '../../../actions/Books/Take'
import { requestBookPut } from '../../../actions/Books/Put'

const mapStateToProps = state => ({
  book: state.books.get,
  user: state.user,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBookTake,
  requestBookPut,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Header extends React.PureComponent {
  componentWillMount() {
    console.log(this.props);
  }
  clickHandleTake = () => {
    this.props.requestBookTake(this.props.book.id, this.props.user.id, this.props.user.token)
  }
  clickHandlePut = () => {
    this.props.requestBookPut(this.props.book.id, this.props.user.token)
  }
  render() {
    return (
      <div>
        <Default>
          <div className={css(styles.header)}>
            <div>
              <img className={css(styles.image)} src={this.props.book.image} alt="Book pic" />
              {this.props.book.user && this.props.book.user.id !== this.props.user.id &&
                <button>{this.props.book.user.name}</button>
              }
              {this.props.book.user && this.props.book.user.id === this.props.user.id &&
                <button onClick={this.clickHandlePut}>Put</button>
              }
              {!this.props.book.user &&
                <button onClick={this.clickHandleTake}>Take</button>
              }
            </div>
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
