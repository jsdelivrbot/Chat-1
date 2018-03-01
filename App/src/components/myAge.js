import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addMyAge } from '../actions/actions'
import Slider from 'rc-slider'
import AgeContainer from './ageContainer'
import limit from '../agelimits.js'

class MyAge extends Component {
  render() {
    return (
      <Fragment>
        <AgeContainer age = { this.props.store.settings.m_a } />
        <Slider 
          min = { limit.low } 
          max = { limit.top } 
          defaultValue = { this.props.store.settings.m_a } 
          onChange = { (age) => this.props.dispatch(addMyAge(age)) }
        />
      </Fragment>
    )
  }
}

export default connect(state => ({ store : state }))(MyAge)