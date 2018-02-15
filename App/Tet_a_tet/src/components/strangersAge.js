import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addStrangersAge } from '../actions/actions'
import Slider from 'rc-slider'
import AgeContainer from './ageContainer'

const Range = Slider.createSliderWithTooltip(Slider.Range)

class StrangersAge extends Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
    this.state = {
      age : [2, 3]
    }
    this.props.dispatch(addStrangersAge(this.state.age))
  }
  
  update(age) {
    this.props.dispatch(addStrangersAge(age))
    this.setState({ age: age })
  }
  
  render() {
    return(
      <Fragment>
        <AgeContainer age = { this.state.age } />
        <Range min={0} max={5} defaultValue={[2, 3]} onChange = { this.update } pushable = { 1 }/>
      </Fragment>
    )
  }
}

export default connect()(StrangersAge)