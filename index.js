import React from 'react';
import Root from './containers/Root';
import { Router } from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'

const history = new BrowserHistory()

React.render(
  <Root history={history} />,
  document.getElementById('react')
);

