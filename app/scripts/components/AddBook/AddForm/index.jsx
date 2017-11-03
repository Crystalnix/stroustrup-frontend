import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import {
  TextField,
} from 'redux-form-material-ui'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { requestBookAdd } from '../../../actions/Books/Add'

const required = value => (value == null ? 'Required' : undefined)

const form = {
  form: 'addForm',
}

const mapStateToProps = state => ({
  initialValues: state.books.isbn,
  token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBookAdd,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(form)
class AddForm extends React.Component {
  submit = (values) => {
    if (delete values.isFetching) {
      this.props.requestBookAdd(values, this.props.token)
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <div>
          <Field
            name="title"
            component={TextField}
            hintText="Title"
            floatingLabelText="Title"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="subtitle"
            component={TextField}
            hintText="Subtitle"
            floatingLabelText="Subtitle"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="author"
            component={TextField}
            hintText="Author"
            floatingLabelText="Author"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="publisher"
            component={TextField}
            hintText="Publisher"
            floatingLabelText="Publisher"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="date"
            component={TextField}
            hintText="Date"
            floatingLabelText="Date"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="count"
            component={TextField}
            hintText="Count"
            floatingLabelText="Count"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="description"
            component={TextField}
            hintText="Description"
            floatingLabelText="Description"
            validate={[required]}
          />
        </div>
        <div>
          <RaisedButton
            type="submit"
            primary={true}
            label="Add Book"
          />
        </div>
      </form>
    )
  }
}

export default AddForm
