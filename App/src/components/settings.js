import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loop } from '../actions/actions'

class Settings extends Component {
  render() {
    return (
      <div>
        <input onChange = { this.props.dispatch(loop()) } type = 'checkbox'/> Loop the conversation
      </div>
    )
  }
}

export default connect()(Settings)