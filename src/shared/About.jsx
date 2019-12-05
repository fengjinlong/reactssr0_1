import React from 'react';
import Axios from 'axios'
import { connect } from 'react-redux'
class About extends React.Component {
  constructor () {
    super()
  }
  componentDidMount () {
    if (!this.props.data) {
      Axios.get('http://localhost:3000/api').then(res => {
        this.props.changeData(res.data.data);
      })
    }
    
  }
  render () {
    return (
       <div>
        <p>About</p>
        <p>数据：{this.props.data}</p>
      </div>
    )
  }
}
About.loadData = store => {
  return Axios.get("http://localhost:3000/api").then(res => {
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