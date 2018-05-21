import React, { Component, Fragment } from 'react'
import Loop from './loop'
import Greeting from './greeting'

class Advanced extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switch: false
    }
    this.switchState = this.switchState.bind(this)
  }
  
  switchState() {
    this.setState((prevState) => ({
      switch: !prevState.switch
    }))
  }
  
  componentDidUpdate() {
    document.getElementsByClassName("settings")[0].scrollTop = document.getElementsByClassName("settings")[0].scrollHeight
  }
  
  render() {
    return(
      <Fragment>
        <div onClick = { this.switchState } className = 'advanced'> 
          Advanced settings 
          { 
            this.state.switch ? <i className = 'material-icons'>keyboard_arrow_down</i> : 
            <i className = 'material-icons'>keyboard_arrow_right</i>
          } 
        </div>

        <div className = { (this.state.switch ? '' : 'advanced-hidden') + ' advanced-animate' }>
          <Loop/>
          <Greeting/>
        </div>
      </Fragment>
    )
  }
}

export default Advanced