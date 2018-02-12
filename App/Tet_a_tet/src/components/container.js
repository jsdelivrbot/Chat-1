import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Message from './message'

class Container extends Component {
  render() {
    return (
      <Fragment>
        { 
          this.props.store.map((element, index) => 
            <Message key = { index } date = { '84.34.53 '} name = { 'Alex '} message = { element } />
          ) 
        } 
      </Fragment>
    )
  }
}

export default connect(
  state => ({ store : state })
)(Container)