import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import io from 'socket.io-client'

import { add } from './actions/actions'
import { allowSending } from './actions/actions'
import { searchStatus } from './actions/actions'
import { isExited } from './actions/actions'
import { newDialog } from './actions/actions'

import dialogReducer from './reducers/conversation'
import Input from './components/input'
import Container from './components/container'
import Gender from './components/gender'
import StrangersAge from './components/strangersAge'
import MyAge from './components/myAge'
import HideSettings from './components/hideSettings'
import Settings from './components/settings'

import '.././styles/root.styl'
import 'rc-slider/assets/index.css'

const socket = io()

let store = createStore(dialogReducer)

socket.on('sms_from_server', (data) => {
  store.dispatch(add(data, 'Stranger'))
})

socket.on('sending_control', async () => {    
  let Store = await store.getState()
  
  if(!Store.allow_sending) {
    store.dispatch(searchStatus(false))
    
  } else if(Store.loop) {
    console.log('Stranger exited when loop == true', Store)
    store.dispatch(newDialog())
    store.dispatch(searchStatus(true))
    socket.emit('join_queue', Store.settings)

  } else {
    console.log('Stranger exited when loop == false', Store)
    store.dispatch(isExited())
  }
  
  store.dispatch(allowSending())
})


/* ----------------------------- Rendering ---------------------------------- */

render(
  <Provider store = { store }>
    <Fragment>
      <div className = 'navbar'>
        <img src = './chatlogos/unnamed4.png'/>
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
          <Settings/>
        </div>
        
        <div className = 'conversation'>
          <Container/>
          <Input socket = { socket }/>
        </div>
      </div>
      
    </Fragment>
  </Provider>,
  document.getElementById('app')
)