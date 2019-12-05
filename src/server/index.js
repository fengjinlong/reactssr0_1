import express from "express";
import App from '../shared/App'
import React from 'react'
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { createServerStore } from "../shared/store/index";
import { matchRoutes } from "react-router-config";
import {Provider} from 'react-redux'
import routes from "../shared/Routes";




const app = express();
app.use('/aa', express.static('public'))

const routersArr = ['/', '/about', '/other']
app.get(routersArr, function (req, res) {
  const matchedRouters = matchRoutes(routes, req.path)
  // 不带win
  const store = createServerStore()
  // 可能有多个请求
  const promises = []
  console.log(matchedRouters)
  // [ 
  //   { 
  //     route: { 
  //       path: '/about', 
  //       component: [Object], 
  //       loadData: [Function] 
  //     },
  //     match: { 
  //       path: '/about', 
  //       url: '/about', 
  //       isExact: true, 
  //       params: {} 
  //     } 
  //   }
  // ]
  matchedRouters.forEach(item => {
    if (item.route.loadData) {
      promises.push(
        new Promise(resolve => {
          
          item.route.loadData(store).then(resolve)
        })
      )
    }
  })

  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location= {req.url}>
          <App />
        </StaticRouter>
      </Provider>
    )
    res.end(`
      <!DOCTYPE html>
        <html>
          <head></head>
          <body>
            <div id="root">${content}</div>
            <script>
                  window.REDUX_DATA = ${JSON.stringify(store.getState())}
                </script>
            <script src="/aa/bundle.js"></script>
          </body>
        </html>
      `)
  })
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