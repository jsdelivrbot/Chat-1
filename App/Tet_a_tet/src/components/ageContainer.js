import React, { Component, Fragment } from 'react'

const accordance = {
  0 : '6',
  1 : '13',
  2 : '18',
  3 : '30',
  4 : '50',
  5 : '∞'
}

class AgeContainer extends Component {
  render() {
    if(this.props.age.constructor === Array)
      return (
        <div> Stranger's age is from { accordance[this.props.age[0]] } to { accordance[this.props.age[1]] } </div>
      )
    else
      return (
        <div> My age is { this.props.age === 51 ? '∞' : this.props.age }</div>
      )
  }
}

export default AgeContainer