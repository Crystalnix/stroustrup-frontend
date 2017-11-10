import { StyleSheet } from 'aphrodite'

const bookPageStyles = StyleSheet.create({
  containerDesktop: {
    width: 'calc(100% - 300px)',
    margin: '150px',
  },
  containerTablet: {
    width: 'calc(100% - 160px)',
    margin: '80px',
    marginTop: '90px',
  },
  containerMobile: {
    width: 'calc(100% - 40px)',
    margin: '20px',
    marginTop: '80px',
  },
  body: {
    marginTop: '30px',
    padding: '50px',
  },
})

export default bookPageStyles
