import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { css } from 'aphrodite'
import { requestBook, removeBook } from '../../../actions/Books/Get/index'
import Loading from '../Loading'
import styles from './style'
import Header from './Header/index'
import Article from './Article/index'
import { Desktop, Tablet, Mobile } from '../../../config/responsive'

const mapStateToProps = state => ({
  book: state.books.get,
  token: state.users.get.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBook,
  removeBook,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Book extends React.Component {
  componentDidMount() {
    const data = {
      id: this.props.params.id,
      token: this.props.token,
    }
    this.props.requestBook(data)
  }

  componentWillUnmount() {
    this.props.removeBook()
  }

  render() {
    const requestData = {
      id: this.props.params.id,
      token: this.props.token,
    }
    if (this.props.book.isFetching) {
      return (
        <Loading />
      )
    }
    return (
      <div>
        <Desktop>
          <div className={css(styles.containerDesktop)}>
            <Header requestData={requestData} book={this.props.book} />
            <Article book={this.props.book} />
          </div>
        </Desktop>
        <Tablet>
          <div className={css(styles.containerTablet)}>
            <Header requestData={requestData} book={this.props.book} />
            <Article book={this.props.book} />
          </div>
        </Tablet>
        <Mobile>
          <div className={css(styles.containerMobile)}>
            <Header requestData={requestData} book={this.props.book} />
            <Article book={this.props.book} />
          </div>
        </Mobile>
      </div>
    )
  }
}


export default Book
