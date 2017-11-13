import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loading from '../Loading'
import IsbnForm from './IsbnForm'
import AddForm from './AddForm/index'
import { removeBookAdd } from '../../../actions/Books/Add'
import { removeBookIsbn } from '../../../actions/Books/Isbn'

const mapStateToProps = state => ({
  book: state.books.book,
  isbn: state.books.isbn,
  add: state.books.add,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  removeBookAdd,
  removeBookIsbn,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class AddBook extends React.Component {
  componentWillMount() {
    console.log('123: ', this.props.add.id)
    if (this.props.add.id !== '') {
      this.props.router.push(`/book/${this.props.add.id}`)
    }
  }

  render() {
    if (this.props.add.id) {
      this.props.removeBookIsbn()
      this.props.removeBookAdd()
      this.props.router.push(`/book/${this.props.add.id}`)
    }
    if (this.props.isbn.isFetching || this.props.add.isFetching) {
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
