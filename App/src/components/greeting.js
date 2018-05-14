import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateGreeting } from '../actions/actions'

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleChange(e) {
    this.setState({ greeting: e.target.value})
  }
  
  handleClick() {
    this.props.dispatch(updateGreeting(this.state.greeting))
  }
  
  render() {
    return(
      <div className = 'greeting'>
        <div> Your greeting </div>
        <textarea onChange = { e => this.handleChange(e)}/>
        <button onClick = { this.handleClick }> Save </button>
      </div>
    )
  }
}

export default connect()(Greeting)