// @flow
import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { requestBookShelf } from '../../actions/Books/Shelf'
import Book from './Book'
import { Bookshelf as styles } from './style'
import type Props from './types'
import Loading from '../Loading'

const mapStateToProps = state => ({
  shelf: state.books.shelf,
  token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBookShelf,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Bookshelf extends React.Component<Props> {
  componentWillMount() {
    if (this.props.shelf.books.length === 0 && !this.props.shelf.isFetching) {
      this.props.requestBookShelf(this.props.token)
    }
  }

  render() {
    if (this.props.shelf.isFetching) {
      return (
        <Loading />
      )
    } else if (!this.props.shelf.isFetching) {
      return (
        <div style={styles.container}>
          {this.props.shelf.books.map(book =>
            (
              <Book
                title={book.title}
                id={book.id}
                key={book.id}
                author={book.author}
                image={book.image}
              />
            ))}
          <FloatingActionButton
            onClick={() => {
              this.props.router.push('/book/add')
            }}
            style={styles.addButton}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
      )
    }
    return (
      <div>Error</div>
    )
  }
}


export default Bookshelf
