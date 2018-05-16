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
  
  render(){
    return(
      <Fragment>
        <div onClick = { this.switchState } className = 'advanced'> 
          Advanced settings { this.state.switch ? '-' : '+'} 
        </div>

        <div className = { this.state.switch ? null : 'advanced-hidden' }>
          <Loop/>
          <Greeting/>
          <div> hello dude </div>
        </div>

      </Fragment>
    )
  }
}

export default Advanced