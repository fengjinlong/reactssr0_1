import React from 'react'
import Header from './Header'
// import Home from './Home'
// import About from './About'
// import { Switch, Route } from 'react-router-dom'
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
//  {/* <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route exact path="/about">
//             <About />
//           </Route>
//         </Switch> */}
export default App