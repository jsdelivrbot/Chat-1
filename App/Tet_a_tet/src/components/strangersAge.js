import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addStrangersAge } from '../actions/actions'
import Slider from 'rc-slider'
import AgeContainer from './ageContainer'
import limit from '../agelimits.js'

const Range = Slider.createSliderWithTooltip(Slider.Range)

class StrangersAge extends Component {
  render() {
    return(
      <Fragment>
        <AgeContainer age = { this.props.store.settings.s_a } />
        <Range 
          min = { limit.low }
          max = { limit.top }
          defaultValue = { this.props.store.settings.s_a }
          onChange = { (age) => this.props.dispatch(addStrangersAge(age)) }
        />
      </Fragment>
    )
  }
}

export default connect(state => ({ store : state }))(StrangersAge)