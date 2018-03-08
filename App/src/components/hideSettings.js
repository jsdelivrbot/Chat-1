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
      <button onClick = { this.switch } className = 'open-settings-button'> Hide </button>
    )
  }
}

export default HideSettings