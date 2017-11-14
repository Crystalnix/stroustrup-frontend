// @flow
import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { requestBookShelf } from '../../../actions/Books/Shelf/index'
import Book from './Book/index'
import { Bookshelf as styles } from './style'
import type Props from './types'
import Loading from '../Loading'
import { Desktop, Tablet, Mobile } from '../../../config/responsive'
import ButtonAdd from './ButtonAdd'

const mapStateToProps = state => ({
  shelf: state.books.shelf,
  user: state.users.get,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBookShelf,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Bookshelf extends React.Component<Props> {
  componentWillMount() {
    const data = {
      token: this.props.user.token,
    }
    this.props.requestBookShelf(data)
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
          {
            this.props.user.role === 'admin' &&
            <ButtonAdd />
          }
        </div>
      )
    }
    return (
      <div>Error</div>
    )
  }
}


export default Bookshelf
