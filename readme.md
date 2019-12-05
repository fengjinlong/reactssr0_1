1 react的jsx
```
"@babel/core": "^7.7.4",
"@babel/preset-react": "^7.7.4",
"babel-loader": "^8.0.6"
.babelrc
{
  "presets": ["@babel/preset-react"]
}
```
2 不打包node api
```
const nodeExternals = require("webpack-node-externals");
externals: [nodeExternals()]
```

3 执行串联命令
```
npm install concurrently --save
"build": "rm -rf dist && npm run build:client && npm run build:server",
```

4 但是，您提供给express.static函数的路径是相对于您启动node过程的目录的

5 如果服务端渲染后，在跳转一个有服务端的页面的spa，此时不会触发服务端的数据初始化，所以spa需要判断
```
componentDidMount() {
    if (this.props.data === "空") {
      Axios.get("http://localhost:3001/getData").then(res => {
        this.props.changeData(res.data.data);
      });
    }
  }
```

6 server 路由 匹配
```
import { matchRoutes } from "react-router-config";
const matchedRouters = matchRoutes(routes, req.path)

matchedRouters.forEach(item => {
  //遍历需要渲染数据的路由，并进行渲染
    if (item.route.loadData) {
      promises.push(
        new Promise(resolve => {
          item.route.loadData(store).then(resolve)
        })
      );
    }
  });
```

7 不同的路由渲染
```
import { StaticRouter } from "react-router-dom";
const content = renderToString(
    <StaticRouter location= {req.url}>
      <App />
    </StaticRouter>
  )


import { BrowserRouter } from "react-router-dom";
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
```






























### createStore的返回值是 dispatch，subscribe，getState，replaceReducer

### action代表的是用户的操作含一个type属性，且type属性也要唯一，相同的type，redux视为同一种操作，因为处理action的函数reducer只判断action中的type属性。

### reducer负责**响应action**并**修改数据**的角色，函数签名为：reducer(previousState，action) => newState，reducer 只是一个模式匹配的东西，真正处理数据的函数，一般是额外在别的地方写的（当然直接写在reducer中也没问题，只是不利于后期维护）
###  getState
### subscribe
### dispatch 将当前的状态和action传给当前reducer，用于生成新的state