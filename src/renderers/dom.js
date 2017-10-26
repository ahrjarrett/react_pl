import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import StateApi from 'DataApi'
import App from 'components/App'

const store = new StateApi(window.initialData)

// using hydrate here because we're rendering content with
// ReactDOMSever, and come React 17, ReactDOM.render will
// no longer work with server-side rendering.
ReactDOM.hydrate(
  <App store={store} />,
  document.getElementById('root')
)
