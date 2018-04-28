import React, { Component } from 'react'
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class InfoLink extends Component {
  handle(e) {
    if(this.props.store.allow_sending) {
      let result = confirm('If you go to FAQ, dialog will stop. Are you sure?')
      if(!result) e.preventDefault()
    }
  }
  
  render() {
    return(
      <Switch>
        <Route exact path='/' render = {(props) => (
          <Link onClick = { this.handle.bind(this) } to='/info'> FAQ </Link>
        )}/>
        
        <Route path='/info' render = {(props) => (
          <Link to='/'> Main Page </Link>
        )}/>
      </Switch>
    )
  }
}

export default withRouter(
  connect(state => ({ store : state }))
  (InfoLink)
)
