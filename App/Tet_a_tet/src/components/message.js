import React, { Component } from 'react'

class Message extends Component {
  render(){
    return(
      <div className = { this.props.name }>
        <div> { this.props.message } </div>
        <div> { this.props.date } </div>
      </div>
    )
  }
}

export default Message