const styles = {
  closed: {
    position: 'relative',
    maxHeight: '160px',
    overflow: 'hidden',
    transition: 'all 0.3s linear 0',
  },
  opened: {
    maxHeight: '500px',
  },
  buttonOpen: {
    display: 'none',
  },
  buttonClose: {
    position: 'absolute',
    bottom: '0',
    border: 'none',
  }
}

export default styles
