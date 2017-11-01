import React from 'react'
import { connect } from 'react-redux'
import { css } from 'aphrodite'
import { bindActionCreators } from 'redux'
import FlatButton from 'material-ui/FlatButton'
import openDescription from '../../../../actions/Description'
import styles from './style'

const mapStateToProps = state => ({
  description: state.description,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  openDescription,
}, dispatch)


@connect(mapStateToProps, mapDispatchToProps)
class Description extends React.Component {
  clickHandle = () => {
    this.props.openDescription()
  }

  render() {
    return (
      <div>
        <div className={css(
          styles.description,
          !this.props.description && styles.closed,
        )}
        >
          <div className="body1">
            JavaScript is the most used programming language in the world. It has the largest
            open source package repository in the world (npm).
            Every type of software application uses JavaScript,
            including server code (Node.js),
            productivity apps, AAA 3d games,robots and IoT (Internet of Things) devices.
            JavaScript has achieved the goal that Java set out to achieve so long ago:
            write once, run anywhere.
            The only trouble is, JavaScript is probably the most misunderstood
            language in the world, and most developers need to learn more to use
            JavaScript effectively in applications. Learn modular programming, prototypal
            inheritance, functional programming basics, design patterns, RESTful
            APIs with Node.js, and more. “Programming JavaScript Applications”
            is for intermediate level programmers
            who want to level up and learn how to architect
            JavaScript applications from the ground up.
          </div>
        </div>
        <div className={css(styles.buttonContainer)}>
          <FlatButton
            className={css(
              styles.button,
              this.props.description ? styles.buttonOpened : styles.buttonClosed,
            )}
            label="Show"
            onClick={this.clickHandle}
          />
        </div>
      </div>
    )
  }
}

export default Description
