import express from 'express'
import config from 'config'
import serverRenderer from './renderers/server'
import { data } from './testData'

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
  const initialContent = await serverRenderer()

  /* Spreading {...initialContent} is important here,
   * because we're spreading both the initialMarkup
   * (which passed by ReactDOMServer) and the
   * initialData, which is the result of our first
   * (now only) call to our API.
   * By attaching initialData to the window object
   * in index.ejs, we have created a portal allowing
   * us to inject server-side JS into the browser */
  res.render('index', { ...initialContent })
})

app.get('/data', (req, res) => {
  res.send(data)
})

app.listen(config.port, () =>
  console.log(`server listening on port ${config.port}`))
