import { StyleSheet } from 'aphrodite'

const descriptionStyles = StyleSheet.create({
  description: {
    position: 'relative',
    overflow: 'hidden',
  },
  closed: {
    maxHeight: '80px',
  },
  opened: {
    maxHeight: '500px',
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: '10px',
  },
  buttonOpened: {
    display: 'none',
  },
  buttonClosed: {
    display: 'block',
  },
})

export default descriptionStyles
