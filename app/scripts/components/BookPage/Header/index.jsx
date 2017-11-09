import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { css } from 'aphrodite'
import styles from './style'
import typography from '../../../style'
import { Default, Mobile } from '../../Responsive'
import { requestHistoryBookGet } from '../../../actions/History/Book/Get'
import { requestHistoryBookPut } from '../../../actions/History/Book/Put'
import { requestHistoryBookTake } from '../../../actions/History/Book/Take'

const mapStateToProps = state => ({
  book: state.books.get,
  user: state.user,
  history: state.history.book.get,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestHistoryBookGet,
  requestHistoryBookTake,
  requestHistoryBookPut,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Header extends React.PureComponent {
  componentWillMount() {
    if (this.props.book.id) {
      const requestData = {
        bookId: this.props.book.id,
        token: this.props.user.token,
      }
      this.props.requestHistoryBookGet(requestData)
    }
  }
  clickHandleTake = () => {
    const requestData = {
      bookId: this.props.book.id,
      user: {
        id: this.props.user.id,
        name: this.props.user.name,
      },
      token: this.props.user.token,
    }
    this.props.requestHistoryBookTake(requestData)
  }
  clickHandlePut = () => {
    const requestData = {
      id: this.props.history.id,
      token: this.props.user.token,
    }
    this.props.requestHistoryBookPut(requestData)
  }
  render() {
    return (
      <div>
        <Default>
          <div className={css(styles.header)}>
            <div>
              <img className={css(styles.image)} src={this.props.book.image} alt="Book pic" />
              {
                this.props.history.id &&
                !this.props.history.putDate &&
                this.props.user.id === this.props.history.user.id &&
                <button onClick={this.clickHandlePut}>Put</button>
              }
              {!this.props.history.id ?
                <button onClick={this.clickHandleTake}>Take</button> :
                this.props.history.putDate && <button onClick={this.clickHandleTake}>Take</button>
              }
            </div>
            {
              !this.props.history.id &&
              <div>
                Noone took this book
              </div>
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
              <div>
                {this.props.history.user.name} took this book {this.props.history.takeDate}
              </div>
            }
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
