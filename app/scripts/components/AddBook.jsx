import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import {
  TextField,
} from 'redux-form-material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { requestAddBook } from '../actions/Book'

const required = value => (value == null ? 'Required' : undefined)

const form = {
  form: 'addBook',
}

const selector = formValueSelector('addBook')

const mapStateToProps = state => ({
  name: selector(state, 'name'),
  token: state.user.token,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestAddBook,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm(form)
class AddBook extends React.Component {
  handleClick = (event) => {
    event.preventDefault()
    this.props.requestAddBook(this.props.name, this.props.token)
  }

  render() {
    return (
      <MuiThemeProvider>
        <form>
          <div>
            <Field
              name="name"
              component={TextField}
              hintText="Name"
              floatingLabelText="Name"
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
      </MuiThemeProvider>
    )
  }
}

export default AddBook
