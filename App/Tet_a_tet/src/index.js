import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Input from './components/input'
import Container from './components/container'
import Params from './components/params'
import Additions from './components/additions'

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
  <Fragment>
    <Params person = 'ME'/>
    <Params/>
    <Additions/>
  </Fragment>,
  settings
)

