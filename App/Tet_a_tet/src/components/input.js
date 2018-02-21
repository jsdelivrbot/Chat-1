import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add } from '../actions/actions'
import { addClass } from '../addClass'

class Input extends Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
    this.add = this.add.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.state = { 
      message: ''
    }
  }
  
  update(e) {
    this.setState({ message : e.target.value })
  }
  
  handleKeyPress(e) {
    if(e.key == 'Enter') this.add()
  }
  
  add() {
    if(this.state.message.split(' ').length - 1 !== this.state.message.length) {
      this.props.dispatch(add(this.state.message, 'You'))
      this.setState({ message: '' })
      this.props.socket.emit('sms', this.state.message);
    }
  }
  
  render() {
    return (
      <div onKeyPress = { this.handleKeyPress } className = 'textfield'>
        <button onClick = { () => addClass('opened-settings') } className = 'open-settings'/>
        <textarea onChange = { this.update } value = { this.state.message }/>
        <button onClick = { this.add }/>
      </div>
    )
  }
}

export default connect()(Input)