import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { styles } from './style'
import { requestHistoryBookTake } from '../../../../../../actions/History/Book/Take'
import { requestHistoryBookPut } from '../../../../../../actions/History/Book/Put'

const mapStateToProps = state => ({
  take: state.history.book.take,
  put: state.history.book.put,
  user: state.users.get,
  book: state.books.get,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestHistoryBookTake,
  requestHistoryBookPut,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class History extends React.PureComponent {
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
        {!this.props.history.id && this.props.history.loaded ?
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
    )
  }
}

export default History
