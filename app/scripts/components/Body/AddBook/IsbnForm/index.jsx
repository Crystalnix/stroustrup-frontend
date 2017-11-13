import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import {
  TextField,
} from 'redux-form-material-ui'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { requestBookIsbn } from '../../../../actions/Books/Isbn'

const required = value => (value == null ? 'Required' : undefined)

const form = {
  form: 'isbnForm',
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBookIsbn,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(form)
class IsbnForm extends React.Component {
  submit = (values) => {
    console.log(values)
    this.props.requestBookIsbn(values)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.submit)}
        style={{ textAlign: 'center' }}
      >
        <div>
          <Field
            name="isbn"
            component={TextField}
            hintText="ISBN"
            floatingLabelText="ISBN"
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

export default IsbnForm
