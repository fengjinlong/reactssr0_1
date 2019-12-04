import express from "express";
import App from '../shared/App'
const app = express();
import React from 'react'
import {
  renderToString
} from 'react-dom/server'
import {
  StaticRouter
} from 'react-router-dom'

// app.use(express.static("public"));
// app.use(express.static('public'))
// app.use('/aa', express.static(path.join(__dirname,"public")))
app.use('/aa', express.static('public'))

app.get(['/', '/about', '/home'], function (req, res) {
  const content = renderToString( <StaticRouter location= {
      req.url
    }><App /></StaticRouter>
  )
  res.end(`
  <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="/aa/bundle.js"></script>
      </body>
    </html>
  `)
})

app.get('/api', (req, res) => {
  res.json({
    success: true,
    data: '666'
  })
})
app.listen(3000, function () {
  console.log('🏀')
})