import express from 'express'
import config from '../config'

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { answer: 45 })
})

app.listen(config.port, () =>
  console.log(`server listening on port ${config.port}`))
