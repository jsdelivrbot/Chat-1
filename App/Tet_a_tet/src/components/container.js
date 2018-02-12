import React, { Component } from 'react';
import { connect } from 'react-redux'
import Message from './message'

class Container extends Component {
  render() {
    return (
      <div className = 'message-container'>
        { 
          this.props.store.messages.map((element, index) => 
            <Message key = { index } date = { '84.34.53 '} name = { 'Alex '} message = { element } />
          ) 
        } 
      </div>
    )
  }
}

export default connect(
  state => ({ store : state })
)(Container)