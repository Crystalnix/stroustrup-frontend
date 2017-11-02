import React from 'react'
import { connect } from 'react-redux'
import Loading from '../Loading'
import IsbnForm from './IsbnForm'
import AddForm from './AddForm/index'

const mapStateToProps = state => ({
  book: state.book,
})

@connect(mapStateToProps)
class AddBook extends React.Component {
  render() {
    if (this.props.book.isFetching && this.props.book.isbnIsFetching) {
      return (
        <Loading />
      )
    } else if (!this.props.book.isFetching && this.props.book.isbnIsFetching) {
      return (
        <IsbnForm />
      )
    } else if (!this.props.book.isFetching && !this.props.book.isbnIsFetching) {
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
