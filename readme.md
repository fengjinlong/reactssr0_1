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