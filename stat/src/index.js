import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/register', async (req, res, next) => {
  const { repo } = req.body

  if (typeof (repo) === 'undefined') {
    console.log(`unknown parameters: ${req.body}`)
    res.sendStatus(404)
  } else {
    console.log(`register: ${repo}`)

    res.sendStatus(204)
  }
})

app.listen(3001, () => {
  console.log('Server started!')
})
