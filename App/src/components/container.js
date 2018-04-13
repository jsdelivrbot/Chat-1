import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './message'

class Container extends Component {
  constructor(props) {
    super(props)
    this.upperCaptionControl = this.upperCaptionControl.bind(this)
    this.underCaptionControl = this.underCaptionControl.bind(this)
  }
  
  underCaptionControl() {
    if(this.props.store.is_exited && !this.props.store.search_status) { 
      return (
        <div className = 'Caption'> Stranger has exited. Press <i className = "material-icons">skip_next</i> to find next! </div>
      )
    } 
  }
      
  upperCaptionControl() {
    if(!this.props.store.is_used) {
      return ['Welcome to the chat! Start searching by', <i className = "material-icons">skip_next</i>]
    }
    
    if(this.props.store.allow_sending || !this.props.store.search_status) { 
      return 'Stranger found! Say hello'
    } 
    
    if(this.props.store.search_status) {
      return 'Searching...Wait please'
    }
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.store.messages !== this.props.store.messages || (this.props.store.is_exited && !prevProps.store.is_exited)) {
      this.refs.container.scrollTop = this.refs.container.scrollHeight
    }
  }
  
  render() {
    return (
      <div className = 'message-container' ref = 'container'>
        <div className = 'Caption'> { this.upperCaptionControl() } </div>
        
        { 
          this.props.store.messages.map((element, index) => 
            <Message key = { index } date = { element.date } name = { element.name } message = { element.message } />
          ) 
        } 
        
        { this.underCaptionControl() } 
  
      </div>
    )
  }
}

export default connect(
  state => ({ store : state })
)(Container)