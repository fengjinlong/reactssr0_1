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





























### import { createStore } from 'redux'
### createStore的返回值是 dispatch，subscribe，getState，replaceReducer

### action代表的是用户的操作含一个type属性，且type属性也要唯一，相同的type，redux视为同一种操作，因为处理action的函数reducer只判断action中的type属性。

### reducer负责**响应action**并**修改数据**的角色，函数签名为：reducer(previousState，action) => newState，reducer 只是一个模式匹配的东西，真正处理数据的函数，一般是额外在别的地方写的（当然直接写在reducer中也没问题，只是不利于后期维护）
###  getState
### subscribe
### dispatch 将当前的状态和action传给当前reducer，用于生成新的state

### 使用 react-redux提供的Provider和connect方法操作store
1 首先在最外层容器中，把所有内容包裹在Provider组件中，将之前创建的store作为prop传给Provider。
2 Provider内的任何一个组件（比如这里的Comp），如果需要使用state中的数据，就必须是「被 connect 过的」组件——使用connect方法对「你编写的组件（MyComp）」进行包装后的产物。
```
const App = () => {
  return (
    <Provider store={store}>
      <Comp/>
    </Provider>
  )
};

class MyComp extends Component {
  // content...
}
const Comp = connect(mapStateToProps，mapDispatchToProps)(MyComp);

```
3 mapStateToProps 这个函数允许我们将store中的数据作为props绑定到组件上。
```
class MyComp extends Component {
  render(){
    return <div>计数：{this.props.count}次</div>
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
const Comp = connect(mapStateToProps)(MyComp);
```

4 mapDispatchToProps 将action作为props绑定到MyComp上。
```
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: (...args) => dispatch(actions.increase(...args)),
    decrease: (...args) => dispatch(actions.decrease(...args))
  }
}

class MyComp extends Component {
  render(){
    const {count, increase, decrease} = this.props;
    return (<div>
      <div>计数：{this.props.count}次</div>
      <button onClick={increase}>增加</button>
      <button onClick={decrease}>减少</button>
    </div>)
  }
}

const Comp = connect(mapStateToProps， mapDispatchToProps)(MyComp);
```