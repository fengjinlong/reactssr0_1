import React from 'react'
import Header from './Header'
// 客户端router
import {renderRoutes} from 'react-router-config'
import routes from './Routes'

const App = function () {
  return (
    <div>
        <Header></Header>
        {renderRoutes(routes)}
    </div>
  )
}

export default App