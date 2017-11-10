import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Loading from '../Loading'
import IsbnForm from './IsbnForm'
import AddForm from './AddForm/index'

const mapStateToProps = state => ({
  book: state.books.book,
  isbn: state.books.isbn,
  add: state.books.add,
})

@withRouter
@connect(mapStateToProps)
class AddBook extends React.Component {
  componentWillMount() {
    if (this.props.add.id !== '') {
      this.props.router.push(`/book/${this.props.add.id}`)
    }
  }

  render() {
    if (!this.props.isbn.isbn && this.props.isbn.isFetching) {
      return (
        <Loading />
      )
    } else if (!this.props.isbn.isbn && !this.props.isbn.isFetching) {
      return (
        <IsbnForm />
      )
    } else if (this.props.isbn.isbn && !this.props.isbn.isFetching) {
      return (
        <AddForm />
      )
    }
    return (
      <div>Error</div>
    )
  }
}

export default AddBook
//9781491950296
