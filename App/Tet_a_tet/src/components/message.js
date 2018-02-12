import React, { Component } from 'react'

class Message extends Component {
  render(){
    return(
      <div>
        <div> { this.props.date } </div>
        <div> { this.props.name } </div>
        <div> { this.props.message } </div>
      </div>
    )
  }
}

export default Message