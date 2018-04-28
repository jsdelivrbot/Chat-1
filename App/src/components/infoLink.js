import React, { Component } from 'react'
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchStatus, isExited } from '../actions/actions'

class InfoLink extends Component {
  handle(e) {
    console.log(this.props.store)
    if(this.props.store.allow_sending || this.props.store.search_status) {
      let result = confirm('If you go to FAQ, dialog will stop. Are you sure?')
      
      if(result) {
        this.props.socket.emit('stop')
        this.props.dispatch(searchStatus(false))
        this.props.dispatch(isExited())
      } else {
        e.preventDefault()
      }
    }
  }
  
  render() {
    return(
      <Switch>
        <Route exact path='/' render = {(props) => (
          <Link onClick = { this.handle.bind(this) } to='/info'> FAQ </Link>
        )}/>
        
        <Route path='/info' render = {(props) => (
          <Link to='/'> Back ⮌ </Link>
        )}/>
      </Switch>
    )
  }
}

export default withRouter(
  connect(state => ({ store : state }))
  (InfoLink)
)
