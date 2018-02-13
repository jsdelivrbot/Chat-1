import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Input from './components/input'
import Container from './components/container'
import Gender from './components/gender'
import Additions from './components/additions'
import StrangersAge from './components/strangersAge'
import MyAge from './components/myAge'

import dialogReducer from './reducers/conversation'

import '.././styles/root.styl'

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
      <Gender person = 'ME'/>
      <MyAge />
      <Gender />
    </Fragment>
  </Provider>,
  settings
)

