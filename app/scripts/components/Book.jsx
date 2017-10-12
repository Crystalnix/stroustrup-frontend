// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { requestBook } from '../actions/Book'
import BookType from '../types'

type Props = {
  requestBook: () => mixed,
  book: BookType,
  params: { id: string },
}

class Book extends React.Component<Props> {
  componentWillMount() {
    this.props.requestBook(this.props.params.id)
  }

  render() {
    return (
      <div>
        {this.props.book.name}
        <Link to="/book/123">Click Me</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  book: state.book || {},
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBook,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Book)
