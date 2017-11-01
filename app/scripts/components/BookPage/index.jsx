// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { css } from 'aphrodite'
import { requestBook } from '../../actions/Book'
import BookType from '../../types'
import Loading from '../Loading'
import styles from './style'
import Header from './Header/index'
import Article from './Article/index'
import { Desktop, Tablet, Mobile } from '../Responsive'

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
      <div>
        <Desktop>
          <div className={css(styles.containerDesktop)}>
            <Header book={this.props.book} />
            <Article />
          </div>
        </Desktop>
        <Tablet>
          <div className={css(styles.containerTablet)}>
            <Header book={this.props.book} />
            <Article />
          </div>
        </Tablet>
        <Mobile>
          <div className={css(styles.containerMobile)}>
            <Header book={this.props.book} />
            <Article />
          </div>
        </Mobile>
      </div>
    )
  }
}


export default BookPage
