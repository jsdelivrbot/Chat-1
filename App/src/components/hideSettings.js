import React, { Component } from 'react'
import { addClass } from '../addClass'

class HideSettings extends Component {
  render() {
    return(
      <button onClick = { () => addClass(null) }> Hide </button>
    )
  }
}

export default HideSettings