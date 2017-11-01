import { StyleSheet } from 'aphrodite'

const bookHeaderStyles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerMobile: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: '250px',
    height: '300px',
  },
  title: {
    marginLeft: '30px',
    fontWeight: '300',
    display: 'flex',
    flexDirection: 'column',
  },
  titleMobile: {
    marginTop: '30px',
  },
})

export default bookHeaderStyles
