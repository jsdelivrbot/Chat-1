import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, browserHistory, Switch, Route, Link } from 'react-router-dom'
import io from 'socket.io-client'

import '.././styles/root.styl'
import 'rc-slider/assets/index.css'
import { add, allowSending, searchStatus, isExited, newDialog } from './actions/actions'

import dialogReducer from './reducers/conversation'
import Input from './components/input'
import Container from './components/container'
import InfoLink from './components/infoLink'
import Gender from './components/gender'
import StrangersAge from './components/strangersAge'
import MyAge from './components/myAge'
import Info from './components/info'
import HideSettings from './components/hideSettings'
import Advanced from './components/advanced'

const socket = io()

let store = createStore(dialogReducer)

socket.on('sms_from_server', (data) => {
  store.dispatch(add(data, 'Stranger'))
})

socket.on('sending_control', async () => {    
  let Store = await store.getState()
  
  if(!Store.allow_sending) {
    let greeting = Store.greeting
    
    store.dispatch(searchStatus(false))

    if(greeting.length > 0) {
      store.dispatch(add(greeting, 'You'))
      socket.emit('sms', greeting)
    }
    
  } else if(Store.loop) {
    store.dispatch(newDialog())
    store.dispatch(searchStatus(true))
    socket.emit('join_queue', Store.settings)

  } else {
    store.dispatch(isExited())
  }
  
  store.dispatch(allowSending())
})


/* ----------------------------- Rendering ---------------------------------- */

render(
  <Provider store = { store }>
    <BrowserRouter history = { browserHistory }>
     
      <Fragment>
        <div className = 'navbar'>
          <img src = './chatlogos/unnamed4.png'/>
          <InfoLink socket = { socket }/>
          <HideSettings/>          
        </div>
        
        <div className = 'main'>
          <div className = 'settings'>
            <div>
              <Gender person = 'ME'/>
              <MyAge/>
            </div>
            <div>
              <Gender/>
              <StrangersAge/>
            </div>
            <Advanced/>
          </div>
          
          <div className = 'conversation'>
            <Switch>
              <Route path='/info' component = { Info } />
              
              <Route path='/' render = {() => (
                <Fragment>
                  <Container/>
                  <Input socket = { socket }/>
                </Fragment>
              )}/>
              
            </Switch>
          </div>
        </div>
      </Fragment>
      
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)