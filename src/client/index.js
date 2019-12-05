import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from '../shared/App'
import {Provider} from 'react-redux'
import { createClientStore } from '../shared/store/index'
// 接受createStore返回的store(r, win)
const store = createClientStore()

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
