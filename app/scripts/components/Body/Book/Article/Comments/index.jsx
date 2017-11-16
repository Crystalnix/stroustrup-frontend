import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import Form from './Form/index'
import Comment from './Comment/index'
import { requestComments, removeComments } from '../../../../../actions/Comments/Get'

const mapStateToProps = state => ({
  get: state.comments.get,
  add: state.comments.add,
  token: state.users.get.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestComments,
  removeComments,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Comments extends Component {
  componentWillMount() {
    const data = {
      token: this.props.token,
      id: this.props.params.id,
    }
    this.props.requestComments(data)
  }

  componentWillUnmount() {
    this.props.removeComments
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
