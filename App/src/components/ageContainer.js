import React, { Component, Fragment } from 'react'

class AgeContainer extends Component {
  render() {
    if(this.props.age.constructor === Array)
      return (
        <div> 
          Stranger's age is from { this.props.age[0] } to { this.props.age[1] } 
        </div>
      )
    else
      return (
        <div> 
          My age is { this.props.age }
        </div>
      )
  }
}

export default AgeContainer