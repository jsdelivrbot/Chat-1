import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './message'

class Container extends Component {
  constructor(props) {
    super(props)
    this.captionControl = this.captionControl.bind(this)
    this.underCaptionControl = this.underCaptionControl.bind(this)
  }
  
  underCaptionControl() {
    if(this.props.store.is_exited) { 
      return (
        <div className = 'Caption'> Stranger exited. Press |> to find next! </div>
      )
    } 
  }
      
  captionControl() {
    if(!this.props.store.is_used) {
      return 'Welcome to the chat! Start searching by >|'
    }
    
    if(this.props.store.allow_sending) { 
      return 'Stranger found! Say hello'
    } 
    
    if(this.props.store.search_status) {
      return 'Searching...Wait please'
    }
  }
  
  componentDidUpdate() {
    this.refs.container.scrollTop = this.refs.container.scrollHeight
  }
  
  render() {
    return (
      <div className = 'message-container' ref = 'container'>
        <div className = 'Caption'> { this.captionControl() } </div>
        
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