import React from 'react'
import {Toast, Container} from './Alert.styled'
import { connect } from 'react-redux'

const Alert = ({alerts}) => (
  
  alerts !== null && 
  alerts.length > 0 && 
  <Container>
    {alerts.map(alert => (
      <Toast key={alert.id} type={alert.alertType}>
        {alert.message}
      </Toast>
    ))}
  </Container>
)


const mapStateToProps = state => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
