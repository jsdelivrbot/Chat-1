import React, { Component } from 'react'
import { addClass } from '../addClass'

class HideSettings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switch: false
    }
    this.switch = this.switch.bind(this)
  }
  
  switch() {
    this.state.switch ? addClass(null) : addClass('opened-settings')
    
    this.setState((prevState) => ({
      switch: !prevState.switch
    }))
  }
  
  render() {
    return(
      <i onClick = { this.switch } className = 'material-icons'>
        { this.state.switch ? 'close' : 'settings' }
      </i>
    )
  }
}

export default HideSettings