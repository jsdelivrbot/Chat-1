import React, { Component } from 'react'

class Params extends Component {
  constructor(props) {
    super(props)
    this.handleSex = this.handleSex.bind(this)
    this.handleAge = this.handleAge.bind(this)
    this.state = {
      age: 5
    }
  }

  componentDidMount() {
    if(this.props.person === 'ME') {
      this.setState({ before_gender : 'My gender is', before_age : 'My age is', name : 'ME' })
    } else {
      this.setState({ before_gender : 'Stranger\'s gender is', before_age : 'Stranger\'s age is', name : 'STRANGER' })
    }
  }
  
  handleAge(e) {
    this.setState({ age : e.target.value })
  }
  
  handleSex() {
    
  }
  
  render() {
    return (
      <div>
        <div> { this.state.before_gender } </div>
        <input type="radio" name = { this.state.name } checked/>
        <label> Male </label>
        <input type="radio" name = { this.state.name } />
        <label> Female </label>
        <input type="radio" name = { this.state.name } value="" disabled/>
        <label> No matter </label> 
        
        <div> { this.state.before_age } { this.state.age }</div>
        <input onChange = { this.handleAge } type="range" min="0" max="10" step="1" defaultValue="5"/> 
      </div>
    )
  }
}

export default Params