import React from 'react'
import { Link } from 'react-router'
import Card from 'material-ui/Card/Card'
import CardTitle from 'material-ui/Card/CardTitle'
import CardMedia from 'material-ui/Card/CardMedia'
import { Book as styles } from './style'
import { Default, Mobile } from '../../../../config/responsive'

class Book extends React.PureComponent {
  render() {
    return (
      <Link style={styles.link} to={`/book/${this.props.id}`}>
        <Default>
          <Card
            style={styles.card}
            containerStyle={styles.container}
          >
            <CardMedia
              overlayContentStyle={styles.image}
            >
              <img
                style={styles.image}
                alt="Book pic"
                src={this.props.image}
              />
            </CardMedia>
            <CardTitle
              titleStyle={{
                maxHeight: '142px',
                overflow: 'hidden',
              }}
              title={this.props.title}
              subtitle={`by ${this.props.author}`}
            />
          </Card>
        </Default>
        <Mobile>
          <Card
            style={styles.cardMobile}
            containerStyle={styles.container}
          >
            <CardMedia
              overlayContentStyle={styles.image}
            >
              <img
                style={styles.imageMobile}
                alt="Book pic"
                src={this.props.image}
              />
            </CardMedia>
            <CardTitle
              titleStyle={{
                maxHeight: '142px',
                overflow: 'hidden',
              }}
              title={this.props.title}
              subtitle={`by ${this.props.author}`}
            />
          </Card>
        </Mobile>
      </Link>
    )
  }
}

export default Book
