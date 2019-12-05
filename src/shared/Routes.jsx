import Home from './Home'
import About from './About'
import Other from './Other'

const routes = [
  {
    path: "/",
    exact:true,
    component: Home
  },
  {
    path: "/about",
    component: About,
    loadData: About.loadData
  },
  {
    path: "/other",
    component: Other
  }
]
export default routes