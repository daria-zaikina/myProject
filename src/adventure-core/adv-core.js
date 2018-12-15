import ReactDOM from 'react-dom';
import React from 'react';
import Root from '../adventure-core/adv-root.jsx';
import '@babel/polyfill';
import 'whatwg-fetch';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Root />, rootElement);