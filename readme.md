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






























### createStore的返回值是 dispatch，subscribe，getState，replaceReducer

### action代表的是用户的操作含一个type属性，且type属性也要唯一，相同的type，redux视为同一种操作，因为处理action的函数reducer只判断action中的type属性。

### reducer负责**响应action**并**修改数据**的角色，函数签名为：reducer(previousState，action) => newState，reducer 只是一个模式匹配的东西，真正处理数据的函数，一般是额外在别的地方写的（当然直接写在reducer中也没问题，只是不利于后期维护）
###  getState
### subscribe
### dispatch 将当前的状态和action传给当前reducer，用于生成新的state