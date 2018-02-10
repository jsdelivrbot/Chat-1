import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = { 
      message: null 
    }
  }
  
  onChange(e) {
    this.setState({ message : e.target.value })
  }
  
  onClick() {
    console.log(this.state.message)
  }
  
  render() {
    return (
      <div>
        <input onChange = { this.onChange }/>
        <button onClick = { this.onClick }/>
      </div>
    )
  }
}

export default Input