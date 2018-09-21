import React, { Component } from 'react';
import './index.scss'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { Button, List, InputItem, Toast } from 'antd-mobile'
import AppHomeHeader from '@compoents/AppHomeHeader'
import http from '@/fetch/http'
import MessageSwiper from './chilren/MessageSwiper'
import Entrance from './chilren/Entrance'
import { WhiteSpace } from 'antd-mobile';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }
  render() {
    return (
      <div>
        <AppHomeHeader></AppHomeHeader>
        <WhiteSpace style={{backgroundColor:'#f1f1f1',height:'10px'}} ></WhiteSpace>
        <MessageSwiper></MessageSwiper>
        <WhiteSpace style={{backgroundColor:'#f1f1f1',height:'10px'}} ></WhiteSpace>
        <Entrance></Entrance>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
