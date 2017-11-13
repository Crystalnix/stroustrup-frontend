import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { css } from 'aphrodite'
import RaisedButton from 'material-ui/RaisedButton'
import styleSheet, { styles } from './style'
import typography from '../../../../config/style'
import { Default, Mobile } from '../../../../config/responsive'
import { requestHistoryBookGet } from '../../../../actions/History/Book/Get/index'
import { requestHistoryBookPut } from '../../../../actions/History/Book/Put/index'
import { requestHistoryBookTake } from '../../../../actions/History/Book/Take/index'
import Info from './Info'
import History from './History'

const mapStateToProps = state => ({
  book: state.books.get,
  user: state.users.get,
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
      const data = {
        bookId: this.props.book.id,
        token: this.props.user.token,
      }
      this.props.requestHistoryBookGet(data)
    }
  }
  clickHandleTake = () => {
    const data = {
      bookId: this.props.book.id,
      user: {
        id: this.props.user.id,
        name: this.props.user.name,
      },
      token: this.props.user.token,
    }
    this.props.requestHistoryBookTake(data)
  }
  clickHandlePut = () => {
    const data = {
      id: this.props.history.id,
      token: this.props.user.token,
    }
    this.props.requestHistoryBookPut(data)
  }
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
              <History history={this.props.history} />
              {
                this.props.history.id &&
                !this.props.history.putDate &&
                this.props.user.id === this.props.history.user.id &&
                <RaisedButton
                  style={styles.takeButton}
                  onClick={this.clickHandlePut}
                  primary={true}
                  label="Put Book"
                />
              }
              {!this.props.history.id ?
                <RaisedButton
                  onClick={this.clickHandleTake}
                  style={styles.takeButton}
                  primary={true}
                  label="Take Book"
                /> :
                this.props.history.putDate && <RaisedButton
                  style={styles.takeButton}
                  onClick={this.clickHandleTake}
                  primary={true}
                  label="Take Book"
                />
              }
            </div>
          </div>
        </Default>
        <Mobile>
          <div className={css(styleSheet.header, styleSheet.headerMobile)}>
            <img className={css(styleSheet.image)} src={this.props.book.image} alt="Book pic" />
            <div className={css(styleSheet.title, styleSheet.titleMobile)}>
              <Info book={this.props.book} />
              <History history={this.props.history} />
              {
                this.props.history.id &&
                !this.props.history.putDate &&
                this.props.user.id === this.props.history.user.id &&
                <RaisedButton
                  style={styles.takeButton}
                  onClick={this.clickHandlePut}
                  primary={true}
                  label="Put Book"
                />
              }
              {!this.props.history.id ?
                <RaisedButton
                  onClick={this.clickHandleTake}
                  style={styles.takeButton}
                  primary={true}
                  label="Take Book"
                /> :
                this.props.history.putDate && <RaisedButton
                  style={styles.takeButton}
                  onClick={this.clickHandleTake}
                  primary={true}
                  label="Take Book"
                />
              }
            </div>
          </div>
        </Mobile>
      </div>
    )
  }
}

export default Header
