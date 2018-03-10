import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add } from '../actions/actions'
import { newDialog } from '../actions/actions'

class Input extends Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
    this.add = this.add.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.next = this.next.bind(this)
    this.state = { 
      message: ''
    }
  }
  
  next() {
    this.props.dispatch(newDialog())
  }
  
  update(e) {
    this.setState({ message : e.target.value })
  }
  
  handleKeyPress(e) {
    if(e.key == 'Enter') this.add()
  }
  
  add() {
    if(!this.state.message.match(/^\s*$/)) {
      this.props.dispatch(add(this.state.message, 'You'))
      this.setState({ message: '' })
      this.props.socket.emit('sms', this.state.message);
    }
  }
  
  render() {
    return (
      <div onKeyPress = { this.handleKeyPress } className = 'textfield'>
        <i onClick = { this.next } className = 'material-icons'>skip_next</i>
        <textarea onChange = { this.update } value = { this.state.message } rows = '3'/>
        <i onClick = { this.add } className = 'material-icons'>send</i>
      </div>
    )
  }
}

export default connect()(Input)