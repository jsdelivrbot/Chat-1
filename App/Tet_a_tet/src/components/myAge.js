import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addMyAge } from '../actions/actions'
import Slider from 'rc-slider'
import AgeContainer from './ageContainer'

class MyAge extends Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
    this.state = {
      age : 18
    }
    this.props.dispatch(addMyAge(this.state.age))
  }
  
  update(age) {
    this.props.dispatch(addMyAge(age))
    this.setState({ age : age })
  }
  
  render() {
    return (
      <Fragment>
        <AgeContainer age = { this.state.age } />
        <Slider 
          min={6} 
          max={51} 
          defaultValue={18} 
          onChange = { this.update }
        />
      </Fragment>
    )
  }
}

export default connect()(MyAge)