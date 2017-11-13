import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Link } from 'react-router'
import { Desktop, Tablet, Mobile } from '../../../../config/responsive'
import { styles } from './style'

class ButtonAdd extends React.PureComponent {
  render() {
    return (
      <Link to="/book/add" style={styles.size}>
        <Desktop>
          <FloatingActionButton
            style={styles.addButton}
          >
            <ContentAdd />
          </FloatingActionButton>
        </Desktop>
        <Tablet>
          <FloatingActionButton
            style={styles.addButtonTablet}
          >
            <ContentAdd />
          </FloatingActionButton>
        </Tablet>
        <Mobile>
          <FloatingActionButton
            style={styles.addButtonMobile}
          >
            <ContentAdd />
          </FloatingActionButton>
        </Mobile>
      </Link>
    )
  }
}

export default ButtonAdd
