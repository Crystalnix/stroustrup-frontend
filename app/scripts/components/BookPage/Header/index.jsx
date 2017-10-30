import React from 'react'
import styles from './style'

class Header extends React.PureComponent {
  render() {
    return (
      <div style={styles.header}>
        <img style={styles.image} src="/assets/jsBook.jpg" alt="Book pic"/>
        <div style={styles.title}>
          <h1>{this.props.book.name}</h1>
          <h2>Author</h2>
          <h3>date</h3>
        </div>
      </div>
    )
  }
}

export default Header
