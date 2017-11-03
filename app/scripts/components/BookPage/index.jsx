import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { css } from 'aphrodite'
import { requestBook } from '../../actions/Books/Get'
import BookType from '../../types'
import Loading from '../Loading'
import styles from './style'
import Header from './Header/index'
import Article from './Article/index'
import { Desktop, Tablet, Mobile } from '../Responsive'

const mapStateToProps = state => ({
  book: state.books.get,
  token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBook,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class BookPage extends React.Component {
  componentDidMount() {
    console.log(this.props);
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
            <Article book={this.props.book} />
          </div>
        </Desktop>
        <Tablet>
          <div className={css(styles.containerTablet)}>
            <Header book={this.props.book} />
            <Article book={this.props.book} />
          </div>
        </Tablet>
        <Mobile>
          <div className={css(styles.containerMobile)}>
            <Header book={this.props.book} />
            <Article book={this.props.book} />
          </div>
        </Mobile>
      </div>
    )
  }
}


export default BookPage
