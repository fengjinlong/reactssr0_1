import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from '../shared/App'
ReactDOM.hydrate(<BrowserRouter><App></App></BrowserRouter>, document.getElementById('root'))
