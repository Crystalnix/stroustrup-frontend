import { StyleSheet } from 'aphrodite'

export const styles = {
  header: {
    backgroundColor: 'transparent',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  headerMobile: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
  },
  title: {
    marginLeft: '30px',
    fontWeight: '300',
    display: 'flex',
    flexDirection: 'column',
  },
  titleMobile: {
    marginTop: '30px',
    marginLeft: '0',
    justifyContent: 'center',
  },
  info: {
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#B3E5FC',
    border: '1px solid #4FC3F7',
    borderRadius: '5px',
  },
  takeButton: {
    width: '130px',
  }
}

const styleSheet = StyleSheet.create(styles)

export default styleSheet
