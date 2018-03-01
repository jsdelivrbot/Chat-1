import React, { Component } from 'react';
import { connect } from 'react-redux'
import Message from './message'

class Container extends Component {
  componentDidUpdate() {
    this.refs.container.scrollTop = this.refs.container.scrollHeight;
  }
  
  render() {
    return (
      <div className = 'message-container' ref = 'container'>
        { 
          this.props.store.messages.map((element, index) => 
            <Message key = { index } date = { element.date } name = { element.name } message = { element.message } />
          ) 
        } 
      </div>
    )
  }
}

export default connect(
  state => ({ store : state })
)(Container)