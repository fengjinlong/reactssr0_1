import React from 'react';
import Axios from 'axios'
class About extends React.Component {
  constructor () {
    super()
    this.state = {
      data: ''
    }
  }
  componentDidMount () {
    Axios.get('http://localhost:3000/api').then(res => {
      console.log(res)
      this.setState({data: res.data.data})
    })
  }
  render () {
  return <div>{this.state.data}</div>
  }
}
About.loadData = () => {}
export default About