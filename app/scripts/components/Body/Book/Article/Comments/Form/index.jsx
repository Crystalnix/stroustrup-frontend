import React from 'react'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { reduxForm, Field } from 'redux-form'
import {
  TextField,
} from 'redux-form-material-ui'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { requestCommentAdd } from '../../../../../../actions/Comments/Add/index'
import dateFormat from 'dateformat'
import { DATE_FORMAT } from '../../../../../../constants/index'

const required = value => (value == null ? 'Required' : undefined)

const form = {
  form: 'commentForm',
}

const mapStateToProps = state => ({
  user: state.users.get,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestCommentAdd,
}, dispatch)

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(form)
class Form extends React.Component {
  submit = (values) => {
    this.props.requestCommentAdd({
      comment: {
        username: this.props.user.name,
        text: values.comment,
        postDate: dateFormat(new Date(), DATE_FORMAT),
        bookId: this.props.params.id,
      },
      token: this.props.user.token,
    })
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <div>
          <Field
            name="comment"
            style={{ width: '100%' }}
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
