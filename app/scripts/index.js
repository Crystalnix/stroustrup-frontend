import React from 'react'
import {render} from 'react-dom'

const container = document.getElementById('root')



class Book extends React.Component {

  render() {
    return (
      <h1>Hello, world!</h1>
    )
  }
}

render(
  <Book />,
  container
)
