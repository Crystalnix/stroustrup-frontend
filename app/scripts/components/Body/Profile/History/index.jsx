import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { requestHistoryUserGet } from '../../../../actions/History/User'
import Loading from '../../Loading'
import Book from './Book'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
}

const mapStateToProps = state => ({
  history: state.history.user,
  user: state.users.get,
})

const mapDispachToProps = dispatch => bindActionCreators({
  requestHistoryUserGet,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispachToProps)
class History extends Component {
  componentWillMount() {
    console.log(this.props)
    const requesData = {
      userId: this.props.params.id,
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
      <div style={styles.container}>
        {this.props.history.books.map(book =>
          (
            <Book
              title={book.title}
              id={book.id}
              key={book.id}
              author={book.author}
              image={book.image}
              takeDate={book.takeDate}
              putDate={book.putDate}
            />
          ))}
      </div>
    )
  }
}

export default History