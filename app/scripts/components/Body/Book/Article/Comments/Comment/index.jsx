import React, { Component } from 'react'
import { css } from 'aphrodite'
import { Link } from 'react-router'
import Divider from 'material-ui/Divider'
import styleSheet from './style'
import typography from '../../../../../../config/style'

class Comment extends Component {
  render() {
    return (
      <div className={css(styleSheet.container)}>
        <div style={{
          padding: '30px',
        }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          >
            <Link to={`/user/${this.props.ownerId}`}>{ this.props.username }</Link> <div className={css(typography.caption)}>{ this.props.date }</div>
          </div>
          <div className={css(styleSheet.text)}>{ this.props.text }</div>
        </div>
        <Divider />
      </div>
    )
  }
}

export default Comment
