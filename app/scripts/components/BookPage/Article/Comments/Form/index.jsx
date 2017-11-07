import React from 'react'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { reduxForm, Field } from 'redux-form'
import {
  TextField,
} from 'redux-form-material-ui'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { requestCommentAdd } from '../../../../../actions/Comments/Add/index'

const required = value => (value == null ? 'Required' : undefined)

const form = {
  form: 'commentForm',
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestCommentAdd,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(form)
class Form extends React.Component {
  submit = (values) => {
    let date = new Date()
    date = date.getDate() +
      '.' +
      date.getMonth() +
      '.' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds()
    this.props.requestCommentAdd({
      username: this.props.user.name,
      text: values.comment,
      post_date: date,
      book_id: this.props.params.id,
    }, this.props.user.token)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <div>
          <Field
            name="comment"
            component={TextField}
            hintText="Comment"
            floatingLabelText="Comment"
            validate={[required]}
          />
        </div>
        <div>
          <RaisedButton
            type="submit"
            primary={true}
            label="Add Comment"
          />
        </div>
      </form>
    )
  }
}

export default Form
