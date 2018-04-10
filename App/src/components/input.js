import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add } from '../actions/actions'
import { newDialog } from '../actions/actions'
import { allowSending } from '../actions/actions'
import { isUsed } from '../actions/actions'
import { searchStatus } from '../actions/actions'
import { isExited } from '../actions/actions'

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
    this.props.dispatch(isUsed())
    
    if(this.props.store.allow_sending) {
      this.props.dispatch(newDialog())
      this.props.dispatch(allowSending())
    }
    
    if(this.props.store.is_exited) {
      this.props.dispatch(isExited())
    }
    
    this.props.dispatch(searchStatus(true))
    this.props.socket.emit('join_queue', this.props.store.settings)
  }
  
  update(e) {
    this.setState({ message : e.target.value })
  }
  
  handleKeyPress(e) {
    if(e.key == 'Enter') this.add()
  }
  
  add() {
    if(!this.state.message.match(/^\s*$/) && this.props.store.allow_sending) {
      this.props.dispatch(add(this.state.message, 'You'))
      this.setState({ message: '' })
      this.props.socket.emit('sms', this.state.message);
    }
  }
  
  render() {
    return (
      <div onKeyPress = { this.handleKeyPress } className = 'textfield'>
        <i onClick = { this.next } className = 'material-icons'>skip_next</i>
        <textarea onChange = { this.update } value = { this.state.message }/>
        <i onClick = { this.add } className = 'material-icons'>send</i>
      </div>
    )
  }
}

export default connect(
  state => ({ store : state })
)(Input)