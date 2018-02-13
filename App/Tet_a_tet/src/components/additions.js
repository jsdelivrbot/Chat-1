import React, { Component } from 'react'

class Additions extends Component {
  constructor() {
    super(props)
    this.checker = this.checker.bind(this)
  }
  
  checker(){
    
  }
  
  render() {
    return (
      <div>
        <input name = 'kek' type="checkbox" checked='checked' onChange = { this.checker}/>
        <label> Search if stranger skips </label>

      </div>
    )
  }
  
}

export default Additions