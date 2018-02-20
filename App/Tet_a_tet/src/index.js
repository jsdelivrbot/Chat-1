import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import io from 'socket.io-client'
import dialogReducer from './reducers/conversation'
import Input from './components/input'
import Container from './components/container'
import Gender from './components/gender'
import StrangersAge from './components/strangersAge'
import MyAge from './components/myAge'

import '.././styles/root.styl'
import 'rc-slider/assets/index.css'

render(
  <Provider store = { createStore(dialogReducer) }>
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
        <Input/>
      </div>
      
    </Fragment>
  </Provider>,
  document.body
)

const socket = io()