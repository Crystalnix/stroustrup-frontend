import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import Form from './Form'
import Comment from './Comment'
import { requestComments } from '../../../../actions/Comments/Get'
import { commentsRefresh } from '../../../../actions/Comments/Add'
import Loading from '../../../Loading'

const mapStateToProps = state => ({
  get: state.comments.get,
  add: state.comments.add,
  token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestComments,
  commentsRefresh,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Comments extends Component {
  componentWillMount() {
    this.props.requestComments(this.props.token, this.props.params.id)
  }

  render() {
    return (
      <div>
        <Form />
        {this.props.get.comments.map(comment =>
          (
            <Comment
              text={comment.text}
              date={comment.date}
              key={comment.id}
              ownerId={comment.ownerId}
              username={comment.username}
            />
          ))}
      </div>
    )
  }
}

export default Comments
