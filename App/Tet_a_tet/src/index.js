import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';
import Input from './components/input';
import '.././styles/root.styl'

var value = "horray"


ReactDOM.render(
  [
    <Container array =  {['wow', 'hehehehe', 'kek', 'lol']}/>, 
    <Input value = { value }/>
  ],
  document.getElementById('conversation')
);

