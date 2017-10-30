// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestBook } from '../../actions/Book'
import BookType from '../../types'
import Loading from '../Loading'
import styles from './style'
import Header from './Header/index'
import Article from './Article/index'

type Props = {
  requestBook: () => mixed,
  book: BookType,
  params: { id: string },
}

const mapStateToProps = state => ({
  book: state.book,
  token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBook,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class BookPage extends React.Component<Props> {
  componentWillMount() {
    this.props.requestBook(this.props.params.id, this.props.token)
  }

  render() {
    if (this.props.book.isFetching) {
      return (
        <Loading />
      )
    }
    return (
      <div style={styles.container}>
        <Header book={this.props.book} />
        <Article />
      </div>
    )
  }
}


export default BookPage
