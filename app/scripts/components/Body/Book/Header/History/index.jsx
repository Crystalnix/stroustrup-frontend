import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoadingCircle from '../../../LoadingCircle'
import Info from './Info'
import Button from './Button'
import { requestHistoryBookGet } from '../../../../../actions/History/Book/Get'

const mapStateToProps = state => ({
  history: state.history.book.get,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestHistoryBookGet,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class History extends React.PureComponent {
  componentWillMount() {
    this.props.requestHistoryBookGet(this.props.requestData)
  }
  render() {
    if (this.props.history.loaded) {
      return (
        <div>
          <Info history={this.props.history} />
          <Button history={this.props.history} />
        </div>
      )
    }
    return (
      <LoadingCircle />
    )
  }
}

export default History
