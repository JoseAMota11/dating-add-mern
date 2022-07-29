import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './dbCards.js'
import dotenv from 'dotenv'

// App Config
dotenv.config()
const app = express()
const port = process.env.PORT
const connection_url = process.env.MONGO_URL

// Middleware
app.use(express.json())
app.use(Cors())

// DB Config
mongoose.connect(connection_url).catch(
  (err) => console.log(err)
)

// API Endpoinst
app.get("/", (req, res) => res.status(200).send("Hello José"))

app.post("/dating/cards", (req, res) => {
  const dbCard = req.body
  Cards.create(dbCard, (err, data) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('/dating/cards', (req, res) => {
  Cards.find((err, data) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
