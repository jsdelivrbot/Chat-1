import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addMyAge } from '../actions/actions'

class MyAge extends Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
  }
  
  update(e) {
    console.log('hehe');
    this.props.dispatch(addMyAge(e.target.value))
  }
  
  render() {
    return(
      <Fragment>
        <div> My age is </div>
        <input onChange = { this.update } type="range" min="0" max="5" step="1" />
      </Fragment>
    )
  }
}

export default connect()(MyAge)