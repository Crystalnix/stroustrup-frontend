// @flow
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import {
  TextField,
} from 'redux-form-material-ui'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { requestBookAdd } from '../../../../actions/Books/Add'
import type { BookAddToken } from '../../../config/types'

const required = value => (value == null ? 'Required' : undefined)

const form = {
  form: 'addForm',
}

const style = {
  textAlign: 'left',
  width: '100%',
}

const mapStateToProps = state => ({
  initialValues: state.books.isbn,
  token: state.users.get.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBookAdd,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(form)
class AddForm extends React.Component {
  submit = (values) => {
    if (delete values.isFetching) {
      const data: BookAddToken = {
        book: values,
        token: this.props.token,
      }
      this.props.requestBookAdd(data)
    }
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.submit)}
        style={{
          padding: '30px',
        }}
      >
        <div>
          <Field
            name="title"
            component={TextField}
            hintText="Title"
            floatingLabelText="Title"
            validate={[required]}
            multiLine={true}
            rows={1}
            rowsMax={4}
            style={style}
          />
        </div>
        <div>
          <Field
            name="subtitle"
            component={TextField}
            hintText="Subtitle"
            floatingLabelText="Subtitle"
            multiLine={true}
            rows={1}
            rowsMax={4}
            validate={[required]}
            style={style}
          />
        </div>
        <div>
          <Field
            name="author"
            component={TextField}
            hintText="Author"
            floatingLabelText="Author"
            validate={[required]}
            style={style}
          />
        </div>
        <div>
          <Field
            name="publisher"
            component={TextField}
            hintText="Publisher"
            floatingLabelText="Publisher"
            validate={[required]}
            style={style}
          />
        </div>
        <div>
          <Field
            name="date"
            component={TextField}
            hintText="Date"
            floatingLabelText="Date"
            validate={[required]}
            style={style}
          />
        </div>
        <div>
          <Field
            name="count"
            component={TextField}
            hintText="Count"
            floatingLabelText="Count"
            validate={[required]}
            style={style}
          />
        </div>
        <div>
          <Field
            name="description"
            component={TextField}
            hintText="Description"
            floatingLabelText="Description"
            multiLine={true}
            rows={2}
            validate={[required]}
            style={style}
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