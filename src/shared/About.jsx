import React from 'react';
import Axios from 'axios'
import { connect } from 'react-redux'
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
About.loadData = store => {
  return Axios.get("http://localhost:3001/getData").then(res => {
    store.dispatch({
      type: "CHANGE_DATA",
      payload: res.data.data
    });
  });
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDiapatchToProps(dispatch) {
  return {
    changeData(data) {
      dispatch({
        type: "CHANGE_DATA",
        payload: data
      });
    }
  };
}
export default connect(mapStateToProps, mapDiapatchToProps)(About)