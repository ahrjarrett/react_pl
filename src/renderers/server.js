import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import StateApi from 'DataApi'
import App from 'components/App'
import { host, port } from 'config'

const serverRenderer = async () => {
  const response = await axios.get(`http://${host}:${port}/data`)
  const store = new StateApi(response.data)

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: response.data,
  }
}

export default serverRenderer
