import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import dialogReducer from './reducers/conversation'
import Input from './components/input'
import Container from './components/container'
import Gender from './components/gender'
import Additions from './components/additions'
import StrangersAge from './components/strangersAge'
import MyAge from './components/myAge'

import '.././styles/root.styl'
import 'rc-slider/assets/index.css'

let store = createStore(dialogReducer)

const conversation = document.getElementById('conversation')
const settings = document.getElementById('settings')

render(
  <Provider store = { store }>
    <Fragment>
      <Container/>
      <Input/>
    </Fragment>
  </Provider>,
  conversation
)

render(
  <Provider store = { store }>
    <Fragment>
      <div>
        <Gender person = 'ME'/>
        <MyAge/>
      </div>
      <div>
        <Gender/>
        <StrangersAge/>
      </div>
    </Fragment>
  </Provider>,
  settings
)

