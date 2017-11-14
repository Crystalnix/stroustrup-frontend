import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { requestHistoryBookShelf } from '../../../actions/History/Book/Shelf'
import Loading from '../Loading'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const mapStateToProps = state => ({
  token: state.users.get.token,
  history: state.history.book.shelf,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestHistoryBookShelf,
}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class History extends React.Component {
  componentWillMount() {
    const data = {
      token: this.props.token,
    }
    this.props.requestHistoryBookShelf(data)
  }

  render() {
    if (this.props.history.isFetching) {
      return (
        <Loading />
      )
    }
    return (
      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Book</TableHeaderColumn>
            <TableHeaderColumn>Take Date</TableHeaderColumn>
            <TableHeaderColumn>Username</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >
          {
            this.props.history.items.map(item => (
              <TableRow key={item.id}>
                <TableRowColumn>
                  <Link to={`/book/${item.book.id}`}>
                    {item.book.title}
                  </Link>
                </TableRowColumn>
                <TableRowColumn>{item.takeDate}</TableRowColumn>
                <TableRowColumn>
                  <Link to={`/user/${item.user.id}`}>
                    {item.user.name}
                  </Link>
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    )
  }
}

export default History
