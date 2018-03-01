import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loop } from '../actions/actions'

class Settings extends Component {
  render() {
    return (
      <div>
        <input onChange = { (e) => this.props.dispatch(loop(e.target.checked)) } type = 'checkbox'/> Loop the conversation
      </div>
    )
  }
}

export default connect()(Settings)