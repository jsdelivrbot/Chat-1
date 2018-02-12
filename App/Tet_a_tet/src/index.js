import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Input from './components/input'
import Container from './components/container'
import '.././styles/root.styl'
import dialogReducer from './reducers/conversation'

let store = createStore(dialogReducer)

render(
  <Provider store = { store }>
    <Fragment>
      <Container/>
      <Input/>
    </Fragment>
  </ Provider>,
  document.getElementById('conversation')
)

