// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router'
import { bindActionCreators } from 'redux'

import { requestBookshelf } from '../actions/Bookshelf'
import type { BookshelfType } from '../types'

type Props = {
  requestBookshelf: () => mixed,
  bookshelf: BookshelfType,
}

class Bookshelf extends React.Component<Props> {
  componentWillMount() {
    this.props.requestBookshelf()
  }

  render() {
    return (
      <div>
        <Link to="/book">Click Me</Link>
        <ul>
          {this.props.bookshelf.books.map(book =>
            (
              <li key={book.id}>
                <Link to={`/book/${book.id}`}>{book.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bookshelf: state.bookshelf || [],
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBookshelf,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bookshelf))
