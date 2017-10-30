import React from 'react'
import styles from './style'

class Description extends React.Component {
  clickHandle = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div
        style={
          this.props.opened ?
            styles.opened :
            styles.closed
        }
      >
        <p>
          JavaScript is the most used programming language in the world. It has the largest
          open source package repository in the world (npm).
          Every type of software application uses JavaScript,
          including server code (Node.js),
          productivity apps, AAA 3d games,robots and IoT (Internet of Things) devices.
          JavaScript has achieved the goal that Java set out to achieve so long ago:
          write once, run anywhere.
        </p>
        <p>
          The only trouble is, JavaScript is probably the most misunderstood
          language in the world, and most developers need to learn more to use
          JavaScript effectively in applications. Learn modular programming, prototypal
          inheritance, functional programming basics, design patterns, RESTful
          APIs with Node.js, and more. “Programming JavaScript Applications”
          is for intermediate level programmers
          who want to level up and learn how to architect
          JavaScript applications from the ground up.
        </p>
        <button onClick={this.clickHandle}>show</button>
      </div>
    )
  }
}

export default Description
