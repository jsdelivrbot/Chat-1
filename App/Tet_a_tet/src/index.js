import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { add } from './actions/actions'
import io from 'socket.io-client'
import dialogReducer from './reducers/conversation'
import Input from './components/input'
import Container from './components/container'
import Gender from './components/gender'
import StrangersAge from './components/strangersAge'
import MyAge from './components/myAge'

import '.././styles/root.styl'
import 'rc-slider/assets/index.css'

const socket = io()

let store = createStore(dialogReducer)

socket.on('sms_from_server', (data) => {
  store.dispatch(add(data, 'Stranger'))
})

render(
  <Provider store = { store }>
    <Fragment>
    
      <div id = 'settings'>
        <div>
          <Gender person = 'ME'/>
          <MyAge/>
        </div>
        <div>
          <Gender/>
          <StrangersAge/>
        </div>
      </div>
      
      <div id = 'conversation'>
        <Container/>
        <Input socket = { socket }/>
      </div>
      
    </Fragment>
  </Provider>,
  document.body
)

  
  
  
  
  