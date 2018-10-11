import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';


ReactDOM.render(
  <div className='catastrophe'>
    <h1>This is the future home of Cat-astrophe</h1>
    <img src='http://placekitten.com/200/200' />
  </div>,
  document.getElementById('app')
);
