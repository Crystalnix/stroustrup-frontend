import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestHistoryUserGet } from '../../../actions/History/User'
import Loading from '../../Loading'

const mapStateToProps = state => ({
  history: state.history.user,
  user: state.user,
})

const mapDispachToProps = dispatch => bindActionCreators({
  requestHistoryUserGet,
}, dispatch)

@connect(mapStateToProps, mapDispachToProps)
class History extends Component {
  componentWillMount() {
    const requesData = {
      userId: this.props.user.id,
      token: this.props.user.token,
    }
    this.props.requestHistoryUserGet(requesData)
  }
  render() {
    if (this.props.history.isFetching) {
      return (
        <Loading />
      )
    }
    return (
      this.props.history.books.map(book =>
        (
          <div key={book.id}>
            <img src={book.image} alt="book img" />
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.takeDate}</div>
            <div>{book.putDate}</div>
          </div>
        ))
    )
  }
}

export default History