import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addMyGender, addStrangersGender } from '../actions/actions'

class Gender extends Component {
  constructor(props) {
    super(props)
    this.handleGender = this.handleGender.bind(this)
    this.state = {
      age: 5
    } 
  }

  componentDidMount() {
    if(this.props.person === 'ME') {
      this.setState({ 
          before_gender : 'My gender is', 
          name : '0'
      })
    } 
    else {
      this.setState({ 
        before_gender : 'Stranger\'s gender is', 
        name : '1'
      })
    }
  }
  
  handleGender(e) {
    if(e.target.name === '0') {
      this.props.dispatch(addMyGender(e.target.value))
    }
    else {
      this.props.dispatch(addStrangersGender(e.target.value))
    }
  }
  
  render() {
    return (
      <Fragment>
        <div> { this.state.before_gender } </div>
        <input onChange = { this.handleGender } type="radio" name = { this.state.name } value='0'/>
        <label> Male </label>
        <input onChange = { this.handleGender } type="radio" name = { this.state.name } value='1'/>
        <label> Female </label>
        <input onChange = { this.handleGender } type="radio" name = { this.state.name } value='2' />
        <label> No matter </label> 
      </Fragment>
    )
  }
}

export default connect()(Gender)