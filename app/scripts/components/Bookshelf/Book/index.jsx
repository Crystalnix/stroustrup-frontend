import React from 'react'
import { Link } from 'react-router'
import Card from 'material-ui/Card/Card'
import CardTitle from 'material-ui/Card/CardTitle'
import CardMedia from 'material-ui/Card/CardMedia'
import { Book as styles } from '../style'
import image from '../../../../images/jsBook.jpg'

class Book extends React.PureComponent {
  render() {
    return (
      <Link style={styles.link} to={`/book/${this.props.id}`}>
        <Card
          title={this.props.name}
          style={styles.card}
        >
          <CardMedia>
            <img
              style={styles.image}
              alt="Book pic"
              src={`/${image}`}
            />
          </CardMedia>
          <CardTitle title={this.props.name} subtitle="by Author" />
        </Card>
      </Link>
    )
  }
}

export default Book
