// @flow
import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { requestBookshelf } from '../../actions/Bookshelf'
import Book from './Book'
import { Bookshelf as styles } from './style'
import type Props from './types'

const mapStateToProps = state => ({
  bookshelf: state.bookshelf,
  token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBookshelf,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Bookshelf extends React.Component<Props> {
  componentWillMount() {
    if (this.props.bookshelf.books.length === 0) {
      this.props.requestBookshelf(this.props.token)
    }
  }

  render() {
    return (
      <div style={styles.container}>
        {this.props.bookshelf.books.map(book =>
          (
            <Book name={book.name} id={book.id} key={book.id} />
          ))}
        <FloatingActionButton
          onClick={() => { this.props.router.push('/book/add') }}
          style={styles.addButton}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}


export default Bookshelf
