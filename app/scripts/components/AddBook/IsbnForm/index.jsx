import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import {
  TextField,
} from 'redux-form-material-ui'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { requestBookIsbn } from '../../../actions/Book'

const required = value => (value == null ? 'Required' : undefined)

const form = {
  form: 'isbnForm',
}

const selector = formValueSelector('isbnForm')

const mapStateToProps = state => ({
  isbn: selector(state, 'isbn'),
  book: state.book,
  token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestBookIsbn,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(form)
class IsbnForm extends React.Component {
  handleClick = (event) => {
    event.preventDefault()
    this.props.requestBookIsbn(this.props.isbn)
  }

  render() {
    return (
      <form>
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
            onClick={this.handleClick}
            primary={true}
            label="Add Book"
          />
        </div>
      </form>
    )
  }
}

export default IsbnForm
