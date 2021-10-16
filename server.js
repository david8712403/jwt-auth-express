require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const jwt = require('jsonwebtoken')
app.use(express.json())

const posts = [
  {
    username: "david",
    title: "david post1"
  },
  {
    username: "chen",
    title: "chen post"
  }
]

app.get('/posts', authenticationToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

function authenticationToken(req, res, next) {
  // Bearer TOKEN
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.listen(port, () => {
  console.log(`listen on port ${port}...`);
})