import React from 'react'
import { connect } from 'react-redux'
import { css } from 'aphrodite'
import { bindActionCreators } from 'redux'
import FlatButton from 'material-ui/FlatButton'
import openDescription from '../../../../../actions/UI/Description/index'
import styles from './style'

const mapStateToProps = state => ({
  description: state.description,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  openDescription,
}, dispatch)


@connect(mapStateToProps, mapDispatchToProps)
class Description extends React.Component {
  componentWillMount() {
  }
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
            {this.props.text}
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
