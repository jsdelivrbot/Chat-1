import React, { Component } from 'react';

class Container extends Component{
  constructor(props){
    super(props)
    this.list = this.props.array.map((element, index) => <li key = { index }> { element }, { index } </li>)
  }
  
  render(){
    return <ul> { this.list }</ul>
  }
}

export default Container