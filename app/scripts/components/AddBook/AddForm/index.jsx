import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import {
  TextField,
} from 'redux-form-material-ui'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'

const required = value => (value == null ? 'Required' : undefined)

const form = {
  form: 'addForm',
}

const selector = formValueSelector('addForm')

const mapStateToProps = state => ({
  addFormProps: {
    title: selector(state, 'title'),
    author: selector(state, 'author'),
    summary: selector(state, 'summary'),
    notes: selector(state, 'notes'),
    publisher: selector(state, 'publisher'),
  },
  initialValues: state.book,
  book: state.book,
  token: state.user.token,
})

@connect(mapStateToProps)
@reduxForm(form)
class AddForm extends React.Component {
  handleClick = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form>
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
            name="author"
            component={TextField}
            hintText="Author"
            floatingLabelText="Author"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="summary"
            component={TextField}
            hintText="Summary"
            floatingLabelText="Summary"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="notes"
            component={TextField}
            hintText="Notes"
            floatingLabelText="Notes"
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
          <RaisedButton
            primary={true}
            label="Add Book"
          />
        </div>
      </form>
    )
  }
}

export default AddForm
